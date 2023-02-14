/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    document.getElementById("open_ml").addEventListener("click", openML);

    meetinglawyers.initialize(
      '09fc3cbf545a007a',
      'DEVELOPMENT',
      function() {
        document
          .getElementById('deviceready')
          .querySelector('.received')
          .innerHTML = 'OK!';

          meetinglawyers.setStyle({ primaryColor : "#2ECD71", 
                                    secondaryColor : "#27ae60",
                                  specialityColor: "#00FF00",
                                navigationColor: "#0000FF"},
                                    function() {}, function(err) {});
      },
      function(err) {
        document
          .getElementById('deviceready')
          .innerHTML = '<p class="event received">' + err + '</p>';
      }
    );
}

function openML() {
  console.log('On click open ML');

  meetinglawyers.authenticate(
    '00000002W',
    function() {
      document
        .getElementById('deviceready')
        .querySelector('.received')
        .innerHTML = "Authenticated";
      
      meetinglawyers.openList(function() {}, function(err) {});
    },
    function(err) {
      document
        .getElementById('deviceready')
        .innerHTML = '<p class="event received">' + err + '</p>';

      meetinglawyers.openList(function() {}, function(err) {});
    }
  );
}