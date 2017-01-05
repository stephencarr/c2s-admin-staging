'use strict';

define('conx2share-admin/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/adapters/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/user.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/authenticators/devise-token.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - authenticators/devise-token.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/devise-token.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/authorizers/devise-token.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - authorizers/devise-token.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/devise-token.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/components/forgot-password-form.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/forgot-password-form.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/forgot-password-form.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/components/form-submit-button.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/form-submit-button.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-submit-button.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/components/global-footer.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/global-footer.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/global-footer.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/components/global-navbar.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/global-navbar.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/global-navbar.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/components/global-sidebar.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/global-sidebar.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/global-sidebar.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/components/login-form.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/login-form.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-form.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/components/signup-form.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/signup-form.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/signup-form.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/controllers/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/controllers/signup.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/signup.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/signup.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('conx2share-admin/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('conx2share-admin/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'conx2share-admin/tests/helpers/start-app', 'conx2share-admin/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _conx2shareAdminTestsHelpersStartApp, _conx2shareAdminTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _conx2shareAdminTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _conx2shareAdminTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('conx2share-admin/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/helpers/resolver', ['exports', 'conx2share-admin/resolver', 'conx2share-admin/config/environment'], function (exports, _conx2shareAdminResolver, _conx2shareAdminConfigEnvironment) {

  var resolver = _conx2shareAdminResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _conx2shareAdminConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _conx2shareAdminConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('conx2share-admin/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/helpers/start-app', ['exports', 'ember', 'conx2share-admin/app', 'conx2share-admin/config/environment'], function (exports, _ember, _conx2shareAdminApp, _conx2shareAdminConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _conx2shareAdminConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _conx2shareAdminApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('conx2share-admin/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/integration/components/forgot-password-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('forgot-password-form', 'Integration | Component | forgot password form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'ncLDaqD+',
      'block': '{"statements":[["append",["unknown",["forgot-password-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'cH0evmwz',
      'block': '{"statements":[["text","\\n"],["block",["forgot-password-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('conx2share-admin/tests/integration/components/forgot-password-form-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/forgot-password-form-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/forgot-password-form-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/integration/components/form-submit-button-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('form-submit-button', 'Integration | Component | form submit button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'vDBaVUwb',
      'block': '{"statements":[["append",["unknown",["form-submit-button"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '7fmqPT0W',
      'block': '{"statements":[["text","\\n"],["block",["form-submit-button"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('conx2share-admin/tests/integration/components/form-submit-button-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/form-submit-button-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/form-submit-button-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/integration/components/global-footer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('global-footer', 'Integration | Component | global footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'GZea9rzH',
      'block': '{"statements":[["append",["unknown",["global-footer"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'Kz1zvreS',
      'block': '{"statements":[["text","\\n"],["block",["global-footer"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('conx2share-admin/tests/integration/components/global-footer-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/global-footer-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/global-footer-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/integration/components/global-navbar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('global-navbar', 'Integration | Component | global navbar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '0WABAYhL',
      'block': '{"statements":[["append",["unknown",["global-navbar"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'cuULc9P8',
      'block': '{"statements":[["text","\\n"],["block",["global-navbar"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('conx2share-admin/tests/integration/components/global-navbar-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/global-navbar-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/global-navbar-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/integration/components/global-sidebar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('global-sidebar', 'Integration | Component | global sidebar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'M94gfZ7F',
      'block': '{"statements":[["append",["unknown",["global-sidebar"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'rnqY/Apv',
      'block': '{"statements":[["text","\\n"],["block",["global-sidebar"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('conx2share-admin/tests/integration/components/global-sidebar-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/global-sidebar-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/global-sidebar-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/integration/components/login-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('login-form', 'Integration | Component | login form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '2BL5yMwO',
      'block': '{"statements":[["append",["unknown",["login-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'gvnGoe4M',
      'block': '{"statements":[["text","\\n"],["block",["login-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('conx2share-admin/tests/integration/components/login-form-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/login-form-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/integration/components/signup-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('signup-form', 'Integration | Component | signup form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '+/KNa4ua',
      'block': '{"statements":[["append",["unknown",["signup-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'Zw5L9ol5',
      'block': '{"statements":[["text","\\n"],["block",["signup-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('conx2share-admin/tests/integration/components/signup-form-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/signup-form-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/signup-form-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/mixins/dropdown-toggle.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - mixins/dropdown-toggle.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/dropdown-toggle.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/models/business.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/business.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/business.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/models/event.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/event.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/event.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/models/group.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/group.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/group.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/models/message.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/message.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/message.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/models/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/routes/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/routes/dashboard.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/dashboard.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dashboard.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/routes/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/routes/login.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/login.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/routes/login/forgot.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/login/forgot.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login/forgot.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/routes/signup.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/signup.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/signup.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/serializers/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/user.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/services/current-user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - services/current-user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/current-user.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/test-helper', ['exports', 'conx2share-admin/tests/helpers/resolver', 'ember-qunit'], function (exports, _conx2shareAdminTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_conx2shareAdminTestsHelpersResolver['default']);
});
define('conx2share-admin/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/adapters/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:user', 'Unit | Adapter | user', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('conx2share-admin/tests/unit/adapters/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/user-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/controllers/signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:signup', 'Unit | Controller | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('conx2share-admin/tests/unit/controllers/signup-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/signup-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/signup-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/helpers/truncate-text-test', ['exports', 'conx2share-admin/helpers/truncate-text', 'qunit'], function (exports, _conx2shareAdminHelpersTruncateText, _qunit) {

  (0, _qunit.module)('Unit | Helper | truncate text');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _conx2shareAdminHelpersTruncateText.truncateText)([42]);
    assert.ok(result);
  });
});
define('conx2share-admin/tests/unit/helpers/truncate-text-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/truncate-text-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/truncate-text-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/mixins/dropdown-toggle-test', ['exports', 'ember', 'conx2share-admin/mixins/dropdown-toggle', 'qunit'], function (exports, _ember, _conx2shareAdminMixinsDropdownToggle, _qunit) {

  (0, _qunit.module)('Unit | Mixin | dropdown toggle');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var DropdownToggleObject = _ember['default'].Object.extend(_conx2shareAdminMixinsDropdownToggle['default']);
    var subject = DropdownToggleObject.create();
    assert.ok(subject);
  });
});
define('conx2share-admin/tests/unit/mixins/dropdown-toggle-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/mixins/dropdown-toggle-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/dropdown-toggle-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/models/business-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('business', 'Unit | Model | business', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('conx2share-admin/tests/unit/models/business-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/business-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/business-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/models/event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('event', 'Unit | Model | event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('conx2share-admin/tests/unit/models/event-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/event-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/event-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/models/group-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('group', 'Unit | Model | group', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('conx2share-admin/tests/unit/models/group-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/group-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/group-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/models/message-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('message', 'Unit | Model | message', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('conx2share-admin/tests/unit/models/message-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/message-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/message-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('conx2share-admin/tests/unit/models/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/routes/dashboard-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('conx2share-admin/tests/unit/routes/dashboard-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/dashboard-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('conx2share-admin/tests/unit/routes/login-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/login-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/routes/login/forgot-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login/forgot', 'Unit | Route | login/forgot', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('conx2share-admin/tests/unit/routes/login/forgot-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/login/forgot-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login/forgot-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/routes/signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:signup', 'Unit | Route | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('conx2share-admin/tests/unit/routes/signup-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/signup-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signup-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/serializers/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Serializer | user', {
    // Specify the other units that are required for this test.
    needs: ['serializer:user']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('conx2share-admin/tests/unit/serializers/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/user-test.js should pass ESLint.\n');
  });
});
define('conx2share-admin/tests/unit/services/current-user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:current-user', 'Unit | Service | current user', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('conx2share-admin/tests/unit/services/current-user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/current-user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/current-user-test.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('conx2share-admin/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
