
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateFrontStore';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9mcm9udFN0b3JlL2FsbC9TZWFyY2hCb3guanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9mcm9udFN0b3JlL2FsbC9TZWFyY2hCb3guanN4',
      sortOrder: 5,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/all/SearchBox.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9hbGwvTWluaUNhcnQuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9hbGwvTWluaUNhcnQuanN4',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/all/MiniCart.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL01vYmlsZU1lbnUuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL01vYmlsZU1lbnUuanN4',
      sortOrder: 50,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/MobileMenu.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvZnJvbnRTdG9yZS9hbGwvVXNlckljb24uanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvZnJvbnRTdG9yZS9hbGwvVXNlckljb24uanN4',
      sortOrder: 30,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/customer/pages/frontStore/all/UserIcon.jsx')
    }
  },
  content: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9DaGVja291dC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9DaGVja291dC5qc3g=',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkout/Checkout.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0JyZWFkY3J1bWIuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0JyZWFkY3J1bWIuanN4',
      sortOrder: 0,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Breadcrumb.jsx')
    }
  },
  checkoutSteps: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9QYXltZW50U3RlcC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9QYXltZW50U3RlcC5qc3g=',
      sortOrder: 20,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkout/PaymentStep.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9TaGlwbWVudFN0ZXAuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9TaGlwbWVudFN0ZXAuanN4',
      sortOrder: 15,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkout/ShipmentStep.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9DdXN0b21lckluZm9TdGVwLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9DdXN0b21lckluZm9TdGVwLmpzeA==',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/customer/pages/frontStore/checkout/CustomerInfoStep.jsx')
    }
  },
  checkoutShippingAddressForm: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9TaGlwcGluZ01ldGhvZHMuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9TaGlwcGluZ01ldGhvZHMuanN4',
      sortOrder: 60,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkout/ShippingMethods.jsx')
    }
  },
  checkoutPageRight: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9TdW1tYXJ5LmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9TdW1tYXJ5LmpzeA==',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkout/Summary.jsx')
    }
  },
  beforePlaceOrderButton: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9TdW1tYXJ5TW9iaWxlLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9jaGVja291dC9TdW1tYXJ5TW9iaWxlLmpzeA==',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkout/SummaryMobile.jsx')
    }
  },
  footer: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0Zvb3Rlci5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0Zvb3Rlci5qc3g=',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Footer.jsx')
    }
  },
  head: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0hlYWRUYWdzLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0hlYWRUYWdzLmpzeA==',
      sortOrder: 5,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/HeadTags.jsx')
    }
  },
  body: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0xheW91dC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0xheW91dC5qc3g=',
      sortOrder: 1,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Layout.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL05vdGlmaWNhdGlvbi5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL05vdGlmaWNhdGlvbi5qc3g=',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Notification.jsx')
    }
  },
  header: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0xvZ28uanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0xvZ28uanN4',
      sortOrder: 1,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Logo.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL01lbnUuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL01lbnUuanN4',
      sortOrder: 5,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Menu.jsx')
    }
  },
  checkoutPaymentMethodcod: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY29kL3BhZ2VzL2Zyb250U3RvcmUvY2hlY2tvdXQvQ2FzaE9uRGVsaXZlcnkuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY29kL3BhZ2VzL2Zyb250U3RvcmUvY2hlY2tvdXQvQ2FzaE9uRGVsaXZlcnkuanN4',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/cod/pages/frontStore/checkout/CashOnDelivery.jsx')
    }
  },
  checkoutPaymentMethodpaypal: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcGF5cGFsL3BhZ2VzL2Zyb250U3RvcmUvY2hlY2tvdXQvUGF5cGFsLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcGF5cGFsL3BhZ2VzL2Zyb250U3RvcmUvY2hlY2tvdXQvUGF5cGFsLmpzeA==',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/paypal/pages/frontStore/checkout/Paypal.jsx')
    }
  },
  checkoutPaymentMethodstripe: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc3RyaXBlL3BhZ2VzL2Zyb250U3RvcmUvY2hlY2tvdXQvU3RyaXBlLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc3RyaXBlL3BhZ2VzL2Zyb250U3RvcmUvY2hlY2tvdXQvU3RyaXBlLmpzeA==',
      sortOrder: 10,
      component: require('/Users/antoine/Documents/GitHub/SweetDisaster/node_modules/@evershop/evershop/src/modules/stripe/pages/frontStore/checkout/Stripe.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );