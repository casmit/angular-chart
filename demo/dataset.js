'use strict';

var dataset = {
  'metadata': {
    'name': 'demo-dataset'
  },
  'schema': [{
    'name': 'day',
    'type': 'datetime',
    'format': '%Y-%m-%dT%H:%M:%S'
  }, {
    'name': 'sales',
    'type': 'double'
  }, {
    'name': 'income',
    'type': 'double'
  }, {
    'name': 'customers',
    'type': 'int'
  }, {
    'name': 'units',
    'type': 'int'
  }, {
    'name': 'dayString',
    'type': 'string'
  }],
  'records': [{
    'day': '2013-01-02T00:00:00',
    'sales': 13461.295202,
    'income': 12365.053,
    'customers': 22,
    'units': 44,
    'dayString': 'Montag'
  },{
    'day': '2013-01-03T00:00:00',
    'sales': 23461.295202,
    'income': 14365.053,
    'customers': 22,
    'units': 22,
    'dayString': 'Dienstag'
  },{
    'day': '2013-01-04T00:00:00',
    'sales': 33461.295202,
    'income': 10365.053,
    'customers': 22,
    'units': 24,
    'dayString': 'Mittwoch'
  },{
    'day': '2013-01-05T00:00:00',
    'sales': 43461.295202,
    'income': 9365.053,
    'customers': 22,
    'units': 33,
    'dayString': 'Donnerstag'
  },{
    'day': '2013-01-06T00:00:00',
    'sales': 53461.295202,
    'income': 16365.053,
    'customers': 22,
    'units': 41,
    'dayString': 'Freitag'
  },{
    'day': '2013-01-07T00:00:00',
    'sales': 63461.295202,
    'income': 5365.053,
    'customers': 22,
    'units': 52,
    'dayString': 'Samstag'
  }]
};