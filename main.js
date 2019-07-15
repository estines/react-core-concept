// need structure like this
// - trackingId
// - status
// - channel
// - subscriberNumber

const mockData = [
  {
    id: '1',
    trackingId: 'cfc289ee-94e5-4794-8559-7ec751e9f0e2',
    orderType: 19,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '2',
    trackingId: '22984d2c-a14b-4cb0-872d-cd507d6fc821',
    orderType: 20,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '3',
    trackingId: '445e6dcc-c4c1-476c-96d4-65f23954f22a',
    orderType: 40,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '4',
    trackingId: '9488a3fd-0346-455a-9832-a7840e6c1953',
    orderType: 4,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '5',
    trackingId: '4fd9bffa-f6a5-4e63-844d-31b5ee40d5f8',
    orderType: 28,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '6',
    trackingId: '24c2acd2-e959-403d-b742-e1cac0aea5e6',
    orderType: 73,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '7',
    trackingId: 'd04afdcd-0cd3-4a66-aab9-3cdf2a55e953',
    orderType: 22,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '8',
    trackingId: 'fdf614cf-2e35-463e-a5f5-a5c0311c4918',
    orderType: 4,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '9',
    trackingId: '8c181c4c-97c7-4ede-92f2-64f6bc5d40f3',
    orderType: 41,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: '10',
    trackingId: '0373bd33-572d-48d8-8681-55e8bc2bba02',
    orderType: 68,
    Status: false,
    payload: {
      Order: {
        channel: 'ISERVICEINDY',
        orderId: '254ad669-d7f0-4f16-89bb-ca580ba5a804',
        orderType: '3',
        ExtendedInfo: [
          {
            name: 'SMS_IND',
            value: 'Y'
          }
        ]
      },
      Customer: {
        OU: [
          {
            subscriber: [
              {
                offers: [
                  {
                    offerName: 'RETENS63',
                    serviceType: '85'
                  }
                ],
                subscriberNumber: '0991234567'
              }
            ]
          }
        ]
      }
    }
  }
];

// need structure like this
// - get range < 7 else return null
// - trackingId
// - status
// - channel
// - subscriberNumber
function mapArray() {
  const mapResult = mockData.map((value, index) => {
    if (index >= 7) {
      return null;
    }

    let newObj = {
      trackingId: value.trackingId,
      status: value.Status,
      channel: value.payload.Order.channel,
      subscriberNumber:
        value.payload.Customer.OU[0].subscriber[0].subscriberNumber
    };

    return newObj;
  });

  console.log(mapResult);
}

function filterArray() {
  const filterResult = mockData.filter(value => {
    if (value.trackingId === 'd04afdcd-0cd3-4a66-aab9-3cdf2a55e953') {
      return true;
    }

    if (value.trackingId === '24c2acd2-e959-403d-b742-e1cac0aea5e6') {
      return true;
    }

    if (value.trackingId === '4fd9bffa-f6a5-4e63-844d-31b5ee40d5f8') {
      return true;
    }

    return false;
  });

  console.log(filterResult);
}

filterArray();
