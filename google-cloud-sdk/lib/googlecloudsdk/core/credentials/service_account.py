# Copyright 2014 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""One-line documentation for auth module.

A detailed description of auth.
"""

import json

from googlecloudsdk.core import config
from oauth2client import client
from oauth2client import service_account


# pylint: disable=protected-access, until oauth2client properly exposes class
class ServiceAccountCredentials(service_account._ServiceAccountCredentials):

  def to_json(self):
    self.service_account_name = self._service_account_email
    strip = ['_private_key'] + client.Credentials.NON_SERIALIZED_MEMBERS
    return super(ServiceAccountCredentials, self)._to_json(strip)

  @classmethod
  def from_json(cls, s):
    data = json.loads(s)
    retval = ServiceAccountCredentials(
        service_account_id=data['_service_account_id'],
        service_account_email=data['_service_account_email'],
        private_key_id=data['_private_key_id'],
        private_key_pkcs8_text=data['_private_key_pkcs8_text'],
        scopes=config.CLOUDSDK_SCOPES,
        user_agent=config.CLOUDSDK_USER_AGENT)
    retval.invalid = data['invalid']
    retval.access_token = data['access_token']
    return retval
