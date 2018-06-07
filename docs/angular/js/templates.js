angular.module('Picatic.Components').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/avatar.html',
    "<h1>Avatars</h1>\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Square image ratio</h2>\n" +
    "  <p>The class <code>pt-avatar</code> can be applied directly to the <code>&lt;img&gt;</code> tag.</p>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>1:1 Image Ratio Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Unknown image ratio</h2>\n" +
    "  <p>If the image ratio is unknown, putting the class on a container element with the image inside will give the appropriate style in modern browsers, but with problems in &lt; IE 11.</p>\n" +
    "\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Other Image Ratio Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup2\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/badge.html',
    "<h1>Badges, Pills, and Chips</h1>\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Badges</h2>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Pills</h2>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup2\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Input</h2>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup3\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css3\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js3\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl3\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/button.html',
    "<h1>Buttons</h1>\n" +
    "<p>Button styling can be applied to either <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> elements.</p>\n" +
    "<p>Button can be made full-width by adding the `pt-button-block` class.</p>\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Primary Button</h2>\n" +
    "  <p>These buttons should be the primary action on any screen. If multiple buttons are used, pair with multiple secondary buttons.</p>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Basic Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content demo-content-flex-col\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Secondary Button</h2>\n" +
    "  <p>These buttons should be the secondary actions on any screen. Pair the color of secondary buttons with the primary button used.</p>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Basic Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup2\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content demo-content-flex-col\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Button with badge</h2>\n" +
    "  <p>For use specifically for checkout. This only applies to primary button types.</p>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Basic Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup3\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content demo-content-flex-col\" ng-include=\"markupUrl3\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/getting-started.html',
    "<div style=\"max-width:864px;\">\n" +
    "  <h2>Installing the Picatic Component Library</h2>\n" +
    "  <p>This component library and documenation is a work in progress.</p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/views/index.html',
    "<!-- <h1>Picatic Component Documentation</h1> -->\n" +
    "<div style=\"max-width:864px;\">\n" +
    "  <h1>Picatic NG Components</h1>\n" +
    "  <h2>What are &ldquo;Picatic Components&rdquo;?</h2>\n" +
    "  <p>Picatic Components is a UI Component framework and reference implementation. The majority of it is based around AngularJS Material with altered styling. This project provides a set of reusable UI components based on Jellyfish Design Principles.</p>\n" +
    "\n" +
    "  <ul class=\"buckets\" layout layout-align=\"center center\" layout-wrap>\n" +
    "    <li flex=\"50\" flex-gt-xs=\"33\">\n" +
    "      <a class=\"md-primary md-raised md-button md-ink-ripple\" ui-sref=\"getting-started\" aria-label=\"Getting Started\" href=\"\">\n" +
    "        <md-icon class=\"block\" role=\"img\" aria-hidden=\"true\">\n" +
    "          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\n" +
    "            <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n" +
    "            <path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"></path>\n" +
    "          </svg>\n" +
    "        </md-icon>\n" +
    "        Getting Started\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li flex=\"50\" flex-gt-xs=\"33\">\n" +
    "      <a class=\"md-primary md-raised md-button md-ink-ripple\" ui-sref=\"avatar\" aria-label=\"Demos\" href=\"\">\n" +
    "        <md-icon class=\"block\" role=\"img\" aria-hidden=\"true\">\n" +
    "          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\n" +
    "            <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n" +
    "            <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z\"></path>\n" +
    "          </svg>\n" +
    "        </md-icon>\n" +
    "        Demos\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li flex=\"50\" flex-gt-xs=\"33\">\n" +
    "      <a class=\"md-primary md-raised md-button md-ink-ripple\" ui-sref=\"typography\" aria-label=\"Demos\" href=\"\">\n" +
    "        <md-icon class=\"block\" role=\"img\" aria-hidden=\"true\">\n" +
    "          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\n" +
    "            <path d=\"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z\"/>\n" +
    "            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n" +
    "          </svg>\n" +
    "        </md-icon>\n" +
    "        Style\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul><!-- /.buckets -->\n" +
    "\n" +
    "  <h2>Notes</h2>\n" +
    "  <p>This component library and documenation is a work in progress.</p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/views/list.html',
    "<h1>Lists</h1>\n" +
    "<p>List styling can be applied to <code>&lt;md-list&gt;</code> elements by adding the <code>pt-list</code> class.</p>\n" +
    "<p>There are a few extra classes that can adjust the styling of lists.</p>\n" +
    "<table class=\"attrs-table\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th>Class</th>\n" +
    "      <th>Outcome</th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td><code>pt-list-dark</code></td>\n" +
    "      <td>Used when list is on a dark background so text and borders are tints of white.</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td><code>pt-list-no-border</code></td>\n" +
    "      <td>Removes all borders on list items.</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td><code>pt-list-no-top-border</code></td>\n" +
    "      <td>Removes top border from list.</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td><code>pt-list-no-bottom-border</code></td>\n" +
    "      <td>Removes bottom border from list.</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Single-line list</h2>\n" +
    "  <p>A single line list can be used to display a list of data. Each row in a list can containt text, images, icons or actions.</p>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Two-line list</h2>\n" +
    "  <p>A two line list includes primary text and a caption. The caption can include secondary information that assists the user.</p>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup2\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/login-dialog.html',
    "<md-dialog>\n" +
    "  <div class=\"onboarding\" ng-class=\"login.state\" md-theme=\"purpleHeart\" layout=\"row\" layout-xs=\"column\" flex=\"100\">\n" +
    "    <div class=\"login-sidebar\" flex=\"40\" flex-xs=\"100\" layout=\"column\" layout-align=\"start\">\n" +
    "      <div class=\"login-sidebar-top\" flex=\"70\" flex-xs=\"100\">\n" +
    "        <img src=\"/img/picatic-horiz-wh.svg\" alt=\"Picatic\" class=\"login-picatic-logo\">\n" +
    "        <div class=\"login-fade-item\" hide-xs>\n" +
    "          <h2>Picatic Components</h2>\n" +
    "          <p>Sign in to view the Picatic Component documentation.</p>\n" +
    "        </div>\n" +
    "      </div><!-- /.login-sidebar-top -->\n" +
    "    </div><!-- /.login-sidebar -->\n" +
    "    <div class=\"login-main\" flex=\"60\" flex-xs=\"100\">\n" +
    "      <div class=\"login-main-heading\">\n" +
    "        <h1>\n" +
    "          <span>Sign in.</span>\n" +
    "        </h1>\n" +
    "        <p class=\"error-message\" ng-show=\"error\" ng-cloak>\n" +
    "          <span ng-bind=\"error.title\"></span><br>\n" +
    "          <span ng-bind=\"error.desc\"></span>\n" +
    "        </p>\n" +
    "      </div><!-- /.login-main-heading -->\n" +
    "\n" +
    "      <form name=\"logInForm\" class=\"form-default\" ng-submit=\"login()\">\n" +
    "        <md-input-container class=\"md-block md-accent login-container-email\">\n" +
    "          <label>Email Address</label>\n" +
    "          <input type=\"email\" name=\"email\" id=\"login-email\" ng-model=\"email\" md-no-asterisk=\"true\" minlength=\"6\" maxlength=\"100\" ng-pattern=\"/^.+@.+\\..+$/\" required ng-disabled=\"dataLoading\">\n" +
    "          <div ng-messages=\"logInForm.email.$error\">\n" +
    "            <div ng-message-exp=\"['required', 'minlength', 'maxlength', 'pattern']\">\n" +
    "              Your email must be between 6 and 100 characters long and look like an e-mail address.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </md-input-container>\n" +
    "\n" +
    "        <md-input-container check-autofill-input class=\"md-block md-accent login-container-password\">\n" +
    "          <label>Password</label>\n" +
    "          <input type=\"password\" name=\"password\" id=\"login-password\" ng-model=\"password\" md-no-asterisk=\"true\" required ng-disabled=\"dataLoading\">\n" +
    "          <div ng-messages=\"logInForm.password.$error\" role=\"alert\">\n" +
    "            <div ng-message=\"required\">This is required.</div>\n" +
    "          </div>\n" +
    "        </md-input-container>\n" +
    "\n" +
    "        <div class=\"login-container-submit\" layout=\"row\" layout-align=\"center center\" flex=\"100\">\n" +
    "          <md-button type=\"submit\" id=\"login-button\" class=\"md-primary md-raised\" ng-disabled=\"dataLoading\">\n" +
    "            Sign In\n" +
    "          </md-button>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div><!-- /.login-main -->\n" +
    "  </div>\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('app/views/login.html',
    "<div ng-controller=\"LoginCtrl\"></div>\n"
  );


  $templateCache.put('app/views/menu.html',
    "<h1>Menus</h1>\n" +
    "<p>Menu is automatically applied to <code>&lt;md-menu&gt;</code> elements.</p>\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Dropdown menu</h2>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Options</h2>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup2\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/snackbar.html',
    "<h1>Snackbars</h1>\n" +
    "<p>Snackbar styling can be applied to <code>&lt;md-toast&gt;</code> elements by adding the <code>pt-snackbar</code> class.</p>\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Snackbar</h2>\n" +
    "  <p>Snackbars contain a single line of text to provide feedback on an operation performed. They can include at most one action.</p>\n" +
    "  <p>Snackbar should show up middle bottom of page.</p>\n" +
    "  <p>Adding <code>md-warn</code> as the <code>highlightClass</code> will show the action button with red text. <code>md-accent</code> will use the theme&rsquo;s accent palette colour.</p>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/table.html',
    "<h1>Data Tables</h1>\n" +
    "<p>Data table styling can be applied to <code>&lt;table&gt;</code> elements by adding the <code>pt-table</code> class.</p>\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Table header</h2>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Column header</h2>\n" +
    "  <p>Column headers are hidden on xs viewports.</p>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup2\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js2\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Row</h2>\n" +
    "  <h4>Notes:</h4>\n" +
    "  <p>When using a menu in the last column, always ensure it is opened from the right so the placement isn't jarring when it appears.</p>\n" +
    "  <p>For improved mobile usability, hidden classes should be used for data in some columns. ex: data formatting, caption, sub heading information, etc.</p>\n" +
    "\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup3\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js3\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl3\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Data table</h2>\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Example Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup4\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"CoffeeScript\">\n" +
    "        <hljs class=\"no-header\" lang=\"coffeescript\" code=\"js4\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl4\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/ticketWidget.html',
    "<header>\n" +
    "  <h1>Card</h1>\n" +
    "</header>\n" +
    "\n" +
    "<p><code>&lt;card&gt;</code> is a special component.</p>\n" +
    "\n" +
    "<p>Make all sorts of cool things with <code>&lt;card&gt;</code>.</p>\n" +
    "\n" +
    "<ul>\n" +
    "  <li>a card</li>\n" +
    "  <li>a different card</li>\n" +
    "  <li>another card</li>\n" +
    "</ul>\n" +
    "\n" +
    "<blockquote>\n" +
    "  <p>This is the best <code>&lt;card&gt;</code> I&rsquo;ve ever seen!</p>\n" +
    "  <p>- Bruce Campbell</p>\n" +
    "</blockquote>\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Usage</h2>\n" +
    "  <p>See for example</p>\n" +
    "\n" +
    "  <demo-container>\n" +
    "    <div class=\"demo-toolbar\">\n" +
    "      <h3>Basic Usage</h3>\n" +
    "      <button type=\"button\" ng-click=\"showSource = !showSource\"><i class=\"material-icons\">code</i></button>\n" +
    "    </div><!-- /.demo-toolbar -->\n" +
    "\n" +
    "    <demo-tabs ng-show=\"showSource\">\n" +
    "      <demo-tab dt-heading=\"HTML\" dt-tab-active>\n" +
    "        <hljs class=\"no-header\" lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "      <demo-tab dt-heading=\"LESS\">\n" +
    "        <hljs class=\"no-header\" lang=\"less\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Markup</h2>\n" +
    "  <hljs lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Attributes</h2>\n" +
    "  <table class=\"attrs-table\">\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <th>Parameter</th>\n" +
    "        <th>Type</th>\n" +
    "        <th>Description</th>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "      <tr class=\"api-params-item\">\n" +
    "        <td class=\"nowrap\">\n" +
    "          one-thing <code>boolean</code>\n" +
    "        </td>\n" +
    "        <td class=\"nowrap\">\n" +
    "          <code>boolean</code>\n" +
    "        </td>\n" +
    "        <td class=\"description\">\n" +
    "          <p>If present, something happens.</p>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr class=\"api-params-item\">\n" +
    "        <td class=\"nowrap\">\n" +
    "          another-thing <code>string</code>\n" +
    "        </td>\n" +
    "        <td class=\"nowrap\">\n" +
    "          <code>string</code>\n" +
    "        </td>\n" +
    "        <td class=\"description\">\n" +
    "          <p>If present, something else happens.</p>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "    </tbody>\n" +
    "  </table>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/typography.html',
    "<div style=\"max-width:864px;margin-bottom:48px\">\n" +
    "  <h2>General Typography</h2>\n" +
    "  <p>Picatic Components use Avenir Next for most component pieces. Larger titles use Futura.</p>\n" +
    "  <p>Avenir Next and Futura will <strong>not</strong> be automatically loaded by Picatic Component inclusion. The developer is responsible for loading all fonts used in the application. When <code>Avenir Next W01</code> isn&rsquo;t loaded, the fallback is <code>Nunito Sans</code> (Google Font) and then <code>sans-serif</code>. <code>Futura PT Multilingual W01</code> fallbacks are <code>Futura</code> then <code>sans-serif</code>.</p>\n" +
    "</div>\n" +
    "\n" +
    "<h2>Heading Styles</h2>\n" +
    "<div class=\"typography-sample\">\n" +
    "  <dl>\n" +
    "    <dt>Display 5</dt>\n" +
    "    <dd>\n" +
    "      <h1 class=\"pt-display-5\">Bold 104</h1>\n" +
    "    </dd>\n" +
    "    <dt>Display 4</dt>\n" +
    "    <dd>\n" +
    "      <h1 class=\"pt-display-4\">Bold 72</h1>\n" +
    "    </dd>\n" +
    "    <dt>Display 3</dt>\n" +
    "    <dd>\n" +
    "      <h1 class=\"pt-display-3\">Bold 56</h1>\n" +
    "    </dd>\n" +
    "    <dt>Display 2</dt>\n" +
    "    <dd>\n" +
    "      <h1 class=\"pt-display-2\">Regular 45</h1>\n" +
    "    </dd>\n" +
    "    <dt>Display 1</dt>\n" +
    "    <dd>\n" +
    "      <h2 class=\"pt-display-1\">Regular 34</h2>\n" +
    "    </dd>\n" +
    "    <dt>Headline</dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-headline\">Regular 24</p>\n" +
    "    </dd>\n" +
    "    <dt>Title</dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-title\">Medium 20</p>\n" +
    "    </dd>\n" +
    "    <dt>Subhead</dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-subhead\">Regular 18</p>\n" +
    "    </dd>\n" +
    "    <dt>Body 3</dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-body-3\">Medium 16</p>\n" +
    "    </dd>\n" +
    "    <dt>Body 2</dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-body-2\">Regular 16</p>\n" +
    "    </dd>\n" +
    "    <dt>Body 1</dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-body-1\">Regular 14</p>\n" +
    "    </dd>\n" +
    "    <dt>Caption 2</dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-caption-2\">Regular 14</p>\n" +
    "    </dd>\n" +
    "    <dt>Caption 1</dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-caption-1\">Regular 12</p>\n" +
    "    </dd>\n" +
    "  </dl>\n" +
    "  <dl>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <h1 class=\"pt-display-5 pt-inverse\">Bold 104</h1>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <h1 class=\"pt-display-4 pt-inverse\">Bold 72</h1>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <h1 class=\"pt-display-3 pt-inverse\">Bold 56</h1>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <h1 class=\"pt-display-2 pt-inverse\">Regular 45</h1>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <h2 class=\"pt-display-1 pt-inverse\">Regular 34</h2>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-headline pt-inverse\">Regular 24</p>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-title pt-inverse\">Medium 20</p>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-subhead pt-inverse\">Regular 18</p>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-body-3 pt-inverse\">Medium 16</p>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-body-2 pt-inverse\">Regular 16</p>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-body-1 pt-inverse\">Regular 14</p>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-caption-2 pt-inverse\">Regular 14</p>\n" +
    "    </dd>\n" +
    "    <dt></dt>\n" +
    "    <dd>\n" +
    "      <p class=\"pt-caption-1 pt-inverse\">Regular 12</p>\n" +
    "    </dd>\n" +
    "  </dl>\n" +
    "</div><!-- /.typography-sample -->\n" +
    "\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Example</h2>\n" +
    "  <p>Adding a class of `pt-inverse` will make text a tint of white rather than a shade of black.</p>\n" +
    "  <hljs lang=\"html\" code=\"markup\" should-interpolate=\"false\"></hljs>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('components/avatar/avatar-2.tmpl.html',
    "<div class=\"pt-avatar pt-avatar-xl\" style=\"display:block;margin-bottom:24px;\">\n" +
    "  <img src=\"https://s3.amazonaws.com/files.picatic.com/users/41382/rz2aNKUQ22mK9Lko38nc_n662021201_296840_4482.jpg\" />\n" +
    "</div><!-- /.pt-avatar -->\n" +
    "<div class=\"pt-avatar pt-avatar-lg\" style=\"display:block;margin-bottom:24px;\">\n" +
    "  <img src=\"https://s3.amazonaws.com/files.picatic.com/users/41382/rz2aNKUQ22mK9Lko38nc_n662021201_296840_4482.jpg\" />\n" +
    "</div><!-- /.pt-avatar -->\n" +
    "<div class=\"pt-avatar\" style=\"display:block;margin-bottom:24px;\">\n" +
    "  <img src=\"https://s3.amazonaws.com/files.picatic.com/users/41382/rz2aNKUQ22mK9Lko38nc_n662021201_296840_4482.jpg\" />\n" +
    "</div><!-- /.pt-avatar -->\n" +
    "<div class=\"pt-avatar pt-avatar-xs\">\n" +
    "  <img src=\"https://s3.amazonaws.com/files.picatic.com/users/41382/rz2aNKUQ22mK9Lko38nc_n662021201_296840_4482.jpg\" />\n" +
    "</div><!-- /.pt-avatar -->\n"
  );


  $templateCache.put('components/avatar/avatar.tmpl.html',
    "<div style=\"display:block;margin-bottom:24px;\">\n" +
    "  <img src=\"https://s3.amazonaws.com/files.picatic.com/img/avatars/default-avatar-user.png\" alt=\"User Avatar\" class=\"pt-avatar pt-avatar-xl\" />\n" +
    "</div>\n" +
    "<div style=\"display:block;margin-bottom:24px;\">\n" +
    "  <img src=\"https://s3.amazonaws.com/files.picatic.com/img/avatars/default-avatar-user.png\" alt=\"User Avatar\" class=\"pt-avatar pt-avatar-lg\" />\n" +
    "</div>\n" +
    "<div style=\"display:block;margin-bottom:24px;\">\n" +
    "  <img src=\"https://s3.amazonaws.com/files.picatic.com/img/avatars/default-avatar-user.png\" alt=\"User Avatar\" class=\"pt-avatar\" />\n" +
    "</div>\n" +
    "<div style=\"display:block;margin-bottom:24px;\">\n" +
    "  <img src=\"https://s3.amazonaws.com/files.picatic.com/img/avatars/default-avatar-user.png\" alt=\"User Avatar\" class=\"pt-avatar pt-avatar-xs\" />\n" +
    "</div>\n"
  );


  $templateCache.put('components/badge/badge-2.tmpl.html',
    "<div style=\"margin-bottom:16px;\" class=\"layout-row layout-align-space-around\">\n" +
    "  <span class=\"pt-badge pt-badge-amaranth pt-pill\">Amaranth</span>\n" +
    "  <span class=\"pt-badge pt-badge-dodger pt-pill\">Dodger</span>\n" +
    "  <span class=\"pt-badge pt-badge-heart pt-pill\">Heart</span>\n" +
    "  <span class=\"pt-badge pt-badge-orange pt-pill\">Orange</span>\n" +
    "  <span class=\"pt-badge pt-badge-selective pt-pill\">Selective</span>\n" +
    "  <span class=\"pt-badge pt-badge-shamrock pt-pill\">Shamrock</span>\n" +
    "  <span class=\"pt-badge pt-pill\">Neutral</span>\n" +
    "  <span class=\"pt-badge pt-badge-alt pt-pill\">Neutral 2</span>\n" +
    "</div>\n" +
    "<div class=\"layout-row layout-align-space-around\">\n" +
    "  <span class=\"pt-badge pt-badge-amaranth pt-badge-sm pt-pill\">Amaranth</span>\n" +
    "  <span class=\"pt-badge pt-badge-dodger pt-badge-sm pt-pill\">Dodger</span>\n" +
    "  <span class=\"pt-badge pt-badge-heart pt-badge-sm pt-pill\">Heart</span>\n" +
    "  <span class=\"pt-badge pt-badge-orange pt-badge-sm pt-pill\">Orange</span>\n" +
    "  <span class=\"pt-badge pt-badge-selective pt-badge-sm pt-pill\">Selective</span>\n" +
    "  <span class=\"pt-badge pt-badge-shamrock pt-badge-sm pt-pill\">Shamrock</span>\n" +
    "  <span class=\"pt-badge pt-badge-sm pt-pill\">Neutral</span>\n" +
    "  <span class=\"pt-badge pt-badge-alt pt-badge-sm pt-pill\">Neutral 2</span>\n" +
    "</div>\n"
  );


  $templateCache.put('components/badge/badge-3.tmpl.html',
    "<div ng-controller=\"Badge3DemoController as ctrl\" layout=\"column\" ng-cloak md-theme=\"purpleHeart\">\n" +
    "  <h2 class=\"md-title\">Icon left and right (custom chip template)</h2>\n" +
    "  <form name=\"fruitForm\">\n" +
    "    <md-chips class=\"pt-chips\" ng-model=\"ctrl.fruitNames\"  placeholder=\"Enter a fruit...\">\n" +
    "      <md-chip-template>\n" +
    "        <md-icon aria-label=\"filter\">filter_list</md-icon>\n" +
    "        <span>{{$chip}}</span>\n" +
    "      </md-chip-template>\n" +
    "      <button md-chip-remove class=\"md-chip-remove\">\n" +
    "        <md-icon aria-label=\"remove\">cancel</md-icon>\n" +
    "      </button>\n" +
    "    </md-chips>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('components/badge/badge.tmpl.html',
    "<div style=\"margin-bottom:16px;\" class=\"layout-row layout-align-space-around\">\n" +
    "  <span class=\"pt-badge pt-badge-amaranth\">Amaranth</span>\n" +
    "  <span class=\"pt-badge pt-badge-dodger\">Dodger</span>\n" +
    "  <span class=\"pt-badge pt-badge-heart\">Heart</span>\n" +
    "  <span class=\"pt-badge pt-badge-orange\">Orange</span>\n" +
    "  <span class=\"pt-badge pt-badge-selective\">Selective</span>\n" +
    "  <span class=\"pt-badge pt-badge-shamrock\">Shamrock</span>\n" +
    "  <span class=\"pt-badge\">Neutral</span>\n" +
    "  <span class=\"pt-badge pt-badge-alt\">Neutral 2</span>\n" +
    "</div>\n" +
    "<div style=\"margin-bottom:16px;\" class=\"layout-row layout-align-space-around\">\n" +
    "  <span class=\"pt-badge pt-badge-amaranth pt-badge-sm\">Amaranth</span>\n" +
    "  <span class=\"pt-badge pt-badge-dodger pt-badge-sm\">Dodger</span>\n" +
    "  <span class=\"pt-badge pt-badge-heart pt-badge-sm\">Heart</span>\n" +
    "  <span class=\"pt-badge pt-badge-orange pt-badge-sm\">Orange</span>\n" +
    "  <span class=\"pt-badge pt-badge-selective pt-badge-sm\">Selective</span>\n" +
    "  <span class=\"pt-badge pt-badge-shamrock pt-badge-sm\">Shamrock</span>\n" +
    "  <span class=\"pt-badge pt-badge-sm\">Neutral</span>\n" +
    "  <span class=\"pt-badge pt-badge-alt pt-badge-sm\">Neutral 2</span>\n" +
    "</div>\n"
  );


  $templateCache.put('components/button/button-2.tmpl.html',
    "<div md-theme=\"purpleHeart\">\n" +
    "  <md-button class=\"pt-button pt-button-purple md-raised pt-button-lg pt-button-block\">Large</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button pt-button-purple md-raised pt-button-block\">Medium</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button pt-button-purple md-raised pt-button-sm pt-button-block\">Small</md-button>\n" +
    "</div>\n" +
    "<div md-theme=\"purpleHeart\">\n" +
    "  <md-button href=\"#\" class=\"pt-button pt-button-shamrock md-raised pt-button-lg pt-button-block\">Large</md-button>\n" +
    "  <md-button class=\"pt-button pt-button-shamrock md-raised pt-button-block\">Medium</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button pt-button-shamrock md-raised pt-button-sm pt-button-block\">Small</md-button>\n" +
    "</div>\n" +
    "<div md-theme=\"cerulean\">\n" +
    "  <md-button class=\"pt-button pt-button-cerulean md-raised pt-button-lg pt-button-block\">Large</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button pt-button-cerulean md-raised pt-button-block\">Medium</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button pt-button-cerulean md-raised pt-button-sm pt-button-block\">Small</md-button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/button/button-3.tmpl.html',
    "<div md-theme=\"purpleHeart\">\n" +
    "  <md-button class=\"pt-button md-raised md-accent pt-button-lg pt-button-badge pt-button-block\">Large <span class=\"pt-badge pt-pill\">3</span></md-button>\n" +
    "</div>\n" +
    "<div md-theme=\"purpleHeart\">\n" +
    "  <md-button class=\"pt-button md-raised md-accent pt-button-badge pt-button-block\">Medium <span class=\"pt-badge pt-pill\">3</span></md-button>\n" +
    "</div>\n" +
    "<div md-theme=\"purpleHeart\">\n" +
    "  <md-button class=\"pt-button md-raised md-accent pt-button-sm pt-button-badge pt-button-block\">Small <span class=\"pt-badge pt-pill\">3</span></md-button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/button/button.tmpl.html',
    "<div md-theme=\"purpleHeart\">\n" +
    "  <md-button class=\"pt-button md-raised md-primary pt-button-lg pt-button-block\">Large</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button md-raised md-primary pt-button-block\">Medium</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button md-raised md-primary pt-button-sm pt-button-block\">Small</md-button>\n" +
    "</div>\n" +
    "<div md-theme=\"purpleHeart\">\n" +
    "  <md-button class=\"pt-button md-raised md-accent pt-button-lg pt-button-block\">Large</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button md-raised md-accent pt-button-block\">Medium</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button md-raised md-accent pt-button-sm pt-button-block\">Small</md-button>\n" +
    "</div>\n" +
    "<div md-theme=\"cerulean\">\n" +
    "  <md-button class=\"pt-button md-raised md-primary pt-cerulean-theme pt-button-lg pt-button-block\">Large</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button md-raised md-primary pt-cerulean-theme pt-button-block\">Medium</md-button>\n" +
    "  <md-button href=\"#\" class=\"pt-button md-raised md-primary pt-cerulean-theme pt-button-sm pt-button-block\">Small</md-button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/list/list-2.tmpl.html',
    "<div ng-controller=\"List2DemoController as ctrl\" ng-cloak layout=\"row\" md-theme=\"purpleHeart\">\n" +
    "  <div flex-gt-sm=\"50\" flex>\n" +
    "    <md-content style=\"padding: 16px;\">\n" +
    "      <md-subheader class=\"md-no-sticky pt-list-subheader\">Two-line with icons</md-subheader>\n" +
    "      <md-list class=\"pt-list\">\n" +
    "        <md-list-item class=\"md-2-line\" ng-repeat=\"person in ctrl.people\">\n" +
    "          <div class=\"md-list-item-text\" ng-class=\"{'md-offset': phone.options.offset }\">\n" +
    "            <h3 ng-bind=\"person.email\"></h3>\n" +
    "            <p ng-bind-template=\"Added on {{person.created}}\"></p>\n" +
    "          </div>\n" +
    "          <md-button class=\"md-secondary md-icon-button\">\n" +
    "            <md-icon aria-label=\"Swap\">swap_horiz</md-icon>\n" +
    "          </md-button>\n" +
    "          <md-button class=\"md-secondary md-icon-button\">\n" +
    "            <md-icon aria-label=\"Settings\">settings</md-icon>\n" +
    "          </md-button>\n" +
    "          <md-menu class=\"md-secondary\">\n" +
    "            <md-button class=\"md-icon-button\">\n" +
    "              <md-icon aria-label=\"More\">more_vert</md-icon>\n" +
    "            </md-button>\n" +
    "            <md-menu-content width=\"4\">\n" +
    "              <md-menu-item>\n" +
    "                <md-button>\n" +
    "                  Redial\n" +
    "                </md-button>\n" +
    "              </md-menu-item>\n" +
    "              <md-menu-item>\n" +
    "                <md-button>\n" +
    "                  Check voicemail\n" +
    "                </md-button>\n" +
    "              </md-menu-item>\n" +
    "              <md-menu-divider></md-menu-divider>\n" +
    "              <md-menu-item>\n" +
    "                <md-button>\n" +
    "                  Notifications\n" +
    "                </md-button>\n" +
    "              </md-menu-item>\n" +
    "            </md-menu-content>\n" +
    "          </md-menu>\n" +
    "        </md-list-item>\n" +
    "      </md-list>\n" +
    "\n" +
    "      <md-subheader class=\"md-no-sticky pt-list-subheader\">Two-line with avatar</md-subheader>\n" +
    "      <md-list class=\"pt-list\">\n" +
    "        <md-list-item class=\"md-2-line md-no-proxy\" ng-repeat=\"person in ctrl.people\">\n" +
    "          <img alt=\"{{person.name}}\" ng-src=\"{{person.img}}\" class=\"md-avatar\" />\n" +
    "          <div class=\"md-list-item-text\" ng-class=\"{'md-offset': phone.options.offset }\">\n" +
    "            <h3 ng-bind=\"person.name\"></h3>\n" +
    "            <p ng-bind-template=\"Added on {{person.created}}\"></p>\n" +
    "          </div>\n" +
    "          <md-button class=\"md-secondary md-icon-button\">\n" +
    "            <md-icon aria-label=\"Swap\">swap_horiz</md-icon>\n" +
    "          </md-button>\n" +
    "          <md-button class=\"md-secondary md-icon-button\">\n" +
    "            <md-icon aria-label=\"Settings\">settings</md-icon>\n" +
    "          </md-button>\n" +
    "          <md-menu class=\"md-secondary\" md-position-mode=\"target-right target\">\n" +
    "            <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n" +
    "              <md-icon aria-label=\"More\">more_vert</md-icon>\n" +
    "            </md-button>\n" +
    "            <md-menu-content width=\"4\">\n" +
    "              <md-menu-item>\n" +
    "                <md-button>\n" +
    "                  Redial\n" +
    "                </md-button>\n" +
    "              </md-menu-item>\n" +
    "              <md-menu-item>\n" +
    "                <md-button>\n" +
    "                  Check voicemail\n" +
    "                </md-button>\n" +
    "              </md-menu-item>\n" +
    "              <md-menu-divider></md-menu-divider>\n" +
    "              <md-menu-item>\n" +
    "                <md-button>\n" +
    "                  Notifications\n" +
    "                </md-button>\n" +
    "              </md-menu-item>\n" +
    "            </md-menu-content>\n" +
    "          </md-menu>\n" +
    "        </md-list-item>\n" +
    "      </md-list>\n" +
    "    </md-content>\n" +
    "  </div><!-- /flex -->\n" +
    "\n" +
    "  <md-divider></md-divider>\n" +
    "\n" +
    "  <div flex-gt-sm=\"50\" flex>\n" +
    "    <md-content style=\"padding: 16px;\">\n" +
    "      <md-subheader class=\"md-no-sticky pt-list-subheader\">Two-line with switch</md-subheader>\n" +
    "      <md-list class=\"pt-list\">\n" +
    "        <md-list-item class=\"md-2-line\" ng-repeat=\"person in ctrl.people\">\n" +
    "          <div class=\"md-list-item-text\" ng-class=\"{'md-offset': phone.options.offset }\">\n" +
    "            <h3 ng-bind=\"person.email\"></h3>\n" +
    "            <p ng-bind-template=\"Added on {{person.created}}\"></p>\n" +
    "          </div>\n" +
    "          <md-switch class=\"md-secondary\" ng-model=\"topping.wanted\"></md-switch>\n" +
    "        </md-list-item>\n" +
    "      </md-list>\n" +
    "\n" +
    "      <md-subheader class=\"md-no-sticky pt-list-subheader\">Two-line with switch and icons</md-subheader>\n" +
    "      <md-list class=\"pt-list\">\n" +
    "        <md-list-item class=\"md-2-line md-no-proxy\" ng-repeat=\"person in ctrl.people\">\n" +
    "          <img alt=\"{{person.name}}\" ng-src=\"{{person.img}}\" class=\"md-avatar\" />\n" +
    "          <div class=\"md-list-item-text\" ng-class=\"{'md-offset': phone.options.offset }\">\n" +
    "            <h3 ng-bind=\"person.name\"></h3>\n" +
    "            <p ng-bind-template=\"Added on {{person.created}}\"></p>\n" +
    "          </div>\n" +
    "          <md-button class=\"md-secondary md-icon-button\">\n" +
    "            <md-icon aria-label=\"Settings\">settings</md-icon>\n" +
    "          </md-button>\n" +
    "          <md-switch class=\"md-secondary\" ng-model=\"topping.wanted\"></md-switch>\n" +
    "        </md-list-item>\n" +
    "      </md-list>\n" +
    "    <md-content>\n" +
    "  </div><!-- /flex -->\n" +
    "</div><!-- /List2DemoController -->\n"
  );


  $templateCache.put('components/list/list.tmpl.html',
    "<div ng-controller=\"ListDemoController as ctrl\" ng-cloak layout=\"row\" md-theme=\"purpleHeart\">\n" +
    "  <div flex-gt-sm=\"50\" flex>\n" +
    "    <md-content style=\"padding: 16px;\">\n" +
    "      <md-subheader class=\"md-no-sticky pt-list-subheader\">Single-line</md-subheader>\n" +
    "      <md-list class=\"pt-list\">\n" +
    "        <md-list-item ng-repeat=\"topping in ctrl.toppings\">\n" +
    "          <p ng-bind=\"topping.name\"></p>\n" +
    "        </md-list-item>\n" +
    "      </md-list>\n" +
    "    </md-content>\n" +
    "  </div><!-- /flex -->\n" +
    "\n" +
    "  <md-divider></md-divider>\n" +
    "\n" +
    "  <div flex-gt-sm=\"50\" flex>\n" +
    "    <md-content style=\"padding: 16px;\">\n" +
    "      <md-subheader class=\"md-no-sticky pt-list-subheader\">Single-line with switch</md-subheader>\n" +
    "      <md-list class=\"pt-list\">\n" +
    "        <md-list-item ng-repeat=\"topping in ctrl.toppings\">\n" +
    "          <p ng-bind=\"topping.name\"></p>\n" +
    "          <md-switch class=\"md-secondary\" ng-model=\"topping.wanted\"></md-switch>\n" +
    "        </md-list-item>\n" +
    "      </md-list>\n" +
    "    </md-content>\n" +
    "  </div><!-- /flex -->\n" +
    "</div><!-- /ListDemoController -->\n"
  );


  $templateCache.put('components/menu/menu-2.tmpl.html',
    "<div ng-controller=\"MenuDemoController as ctrl\" layout=\"row\" md-theme=\"purpleHeart\">\n" +
    "  <div flex-gt-sm=\"33\" flex>\n" +
    "    <p>Option</p>\n" +
    "    <md-menu>\n" +
    "      <md-button class=\"md-primary md-raised pt-button\" ng-click=\"$mdMenu.open($event)\">\n" +
    "        Open Menu\n" +
    "      </md-button>\n" +
    "      <md-menu-content width=\"4\">\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            Item\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            Item\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            Item\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "      </md-menu-content>\n" +
    "    </md-menu>\n" +
    "  </div><!-- /flex -->\n" +
    "  <div flex-gt-sm=\"33\" flex>\n" +
    "    <p>Option icon left</p>\n" +
    "    <md-menu>\n" +
    "      <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n" +
    "        <md-icon md-menu-origin aria-label=\"More\">more_vert</md-icon>\n" +
    "      </md-button>\n" +
    "      <md-menu-content width=\"4\">\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            <md-icon md-menu-align-target>event_available</md-icon>\n" +
    "            Item\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            <md-icon md-menu-align-target>event_available</md-icon>\n" +
    "            Item\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            <md-icon md-menu-align-target>event_available</md-icon>\n" +
    "            Item\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "      </md-menu-content>\n" +
    "    </md-menu>\n" +
    "  </div><!-- /flex -->\n" +
    "  <div flex-gt-sm=\"33\" flex>\n" +
    "    <p>Option icon right</p>\n" +
    "    <md-menu md-position-mode=\"target-right target\">\n" +
    "      <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n" +
    "        <md-icon md-menu-origin aria-label=\"More\">more_vert</md-icon>\n" +
    "      </md-button>\n" +
    "      <md-menu-content width=\"4\">\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            <div layout=\"row\" flex>\n" +
    "              <p flex>Item</p>\n" +
    "              <md-icon md-menu-align-target>chevron_right</md-icon>\n" +
    "            </div>\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            <div layout=\"row\" flex>\n" +
    "              <p flex>Item</p>\n" +
    "              <md-icon>chevron_right</md-icon>\n" +
    "            </div>\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "        <md-menu-item>\n" +
    "          <md-button>\n" +
    "            <div layout=\"row\" flex>\n" +
    "              <p flex>Item</p>\n" +
    "              <md-icon>chevron_right</md-icon>\n" +
    "            </div>\n" +
    "          </md-button>\n" +
    "        </md-menu-item>\n" +
    "      </md-menu-content>\n" +
    "    </md-menu>\n" +
    "  </div><!-- /flex -->\n" +
    "</div><!-- /MenuDemoController -->\n"
  );


  $templateCache.put('components/menu/menu.tmpl.html',
    "<div ng-controller=\"MenuDemoController as ctrl\" md-theme=\"purpleHeart\">\n" +
    "  <md-menu>\n" +
    "    <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n" +
    "      <md-icon aria-label=\"More\">more_vert</md-icon>\n" +
    "    </md-button>\n" +
    "    <md-menu-content width=\"4\">\n" +
    "      <md-menu-item>\n" +
    "        <md-button>\n" +
    "          Item\n" +
    "        </md-button>\n" +
    "      </md-menu-item>\n" +
    "      <md-menu-item>\n" +
    "        <md-button>\n" +
    "          Item\n" +
    "        </md-button>\n" +
    "      </md-menu-item>\n" +
    "      <md-menu-divider></md-menu-divider>\n" +
    "      <md-menu-item>\n" +
    "        <md-button>\n" +
    "          Item\n" +
    "        </md-button>\n" +
    "      </md-menu-item>\n" +
    "    </md-menu-content>\n" +
    "  </md-menu>\n" +
    "</div><!-- /MenuDemoController -->\n"
  );


  $templateCache.put('components/snackbar/snackbar.tmpl.html',
    "<div ng-controller=\"SnackbarDemoController as ctrl\" ng-cloak layout=\"column\" md-theme=\"purpleHeart\">\n" +
    "  <div flex-gt-sm=\"50\" flex style=\"padding: 16px;\" layout=\"row\">\n" +
    "    <div flex-gt-sm=\"50\" flex>\n" +
    "      <p>Snackbar</p>\n" +
    "      <md-button class=\"md-primary md-raised pt-button\" ng-click=\"ctrl.popToast1()\">Show Simple</md-button>\n" +
    "    </div><!-- /flex -->\n" +
    "    <div flex-gt-sm=\"50\" flex>\n" +
    "      <p>Snackbar with action</p>\n" +
    "      <md-button class=\"md-primary md-raised pt-button\" ng-click=\"ctrl.popToast2()\">Show With Action</md-button>\n" +
    "      <md-button class=\"md-primary md-raised pt-button\" ng-click=\"ctrl.popToast2('md-warn')\">Show With Warn Action</md-button>\n" +
    "      <md-button class=\"md-primary md-raised pt-button\" ng-click=\"ctrl.popToast2('md-accent')\">Show With Accent Action</md-button>\n" +
    "    </div><!-- /flex -->\n" +
    "  </div><!-- /flex -->\n" +
    "\n" +
    "  <md-divider></md-divider>\n" +
    "\n" +
    "  <div flex-gt-sm=\"50\" flex style=\"padding: 16px;\" layout=\"row\">\n" +
    "    <div flex-gt-sm=\"50\" flex>\n" +
    "      <p>Snackbar - multi-line</p>\n" +
    "      <md-button class=\"md-primary md-raised pt-button\" ng-click=\"ctrl.popToast3()\">Show Simple</md-button>\n" +
    "    </div><!-- /flex -->\n" +
    "    <div flex-gt-sm=\"50\" flex>\n" +
    "      <p>Snackbar with action - multi-line</p>\n" +
    "      <md-button class=\"md-primary md-raised pt-button\" ng-click=\"ctrl.popToast4()\">Show With Action</md-button>\n" +
    "    </div><!-- /flex -->\n" +
    "  </div><!-- /flex -->\n" +
    "</div><!-- /SnackbarDemoController -->\n"
  );


  $templateCache.put('components/table/table-2.tmpl.html',
    "<div md-theme=\"purpleHeart\" ng-controller=\"Table2DemoController as ctrl\">\n" +
    "\n" +
    "  <div class=\"pt-whiteframe-1dp\">\n" +
    "    <table class=\"pt-table\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th ng-repeat=\"row in ctrl.rows\" ng-click=\"ctrl.sort(row.col)\" ng-class=\"ctrl.tableHeaderClass(row.col)\" ng-bind=\"row.name\"></th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "    </table><!-- /.pt-table -->\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('components/table/table-3.tmpl.html',
    "<div md-theme=\"purpleHeart\" ng-controller=\"Table3DemoController as ctrl\">\n" +
    "\n" +
    "  <div class=\"pt-whiteframe-1dp\">\n" +
    "    <table class=\"pt-table\">\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td ng-repeat=\"row in ctrl.row1\" ng-bind=\"row\"></td>\n" +
    "          <td class=\"pt-table-actions\">\n" +
    "            <div>\n" +
    "              <md-switch aria-label=\"switch\"></md-switch>\n" +
    "              <md-menu md-position-mode=\"target-right target\">\n" +
    "                <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n" +
    "                  <md-icon md-menu-origin aria-label=\"More\">more_vert</md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "              </md-menu>\n" +
    "            </div><!-- /.pt-table-actions -->\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td ng-repeat=\"row in ctrl.row2\" ng-bind=\"row\"></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class=\"pt-table-row-primary\">\n" +
    "            <div layout=\"row\">\n" +
    "              <div class=\"pt-avatar\">\n" +
    "                <img src=\"\" ng-src=\"{{ctrl.row3.avatar}}\" />\n" +
    "              </div><!-- /.pt-avatar -->\n" +
    "              <div class=\"pt-table-name\" flex>\n" +
    "                <h3 class=\"pt-table-headline\" ng-bind=\"ctrl.row3.name\"></h3>\n" +
    "                <span class=\"pt-table-subhead\" ng-bind=\"ctrl.row3.caption\"></span>\n" +
    "              </div>\n" +
    "            </div><!-- /layout -->\n" +
    "          </td>\n" +
    "          <td ng-repeat=\"row in ctrl.row3.columns\" ng-bind=\"row\"></td>\n" +
    "          <td class=\"pt-table-actions\">\n" +
    "            <div>\n" +
    "              <md-switch aria-label=\"switch\"></md-switch>\n" +
    "              <md-menu md-position-mode=\"target-right target\">\n" +
    "                <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n" +
    "                  <md-icon md-menu-origin aria-label=\"More\">more_vert</md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "              </md-menu>\n" +
    "            </div><!-- /.pt-table-actions -->\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table><!-- /.pt-table -->\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('components/table/table-4.tmpl.html',
    "<div md-theme=\"purpleHeart\" ng-controller=\"Table4DemoController as ctrl\">\n" +
    "\n" +
    "  <div class=\"pt-whiteframe-1dp\">\n" +
    "\n" +
    "    <div class=\"pt-table-header no-border\" layout=\"row\">\n" +
    "      <pt-search placeholder=\"Search orders\" on-form-submit=\"ctrl.updateSearch(search)\" on-form-clear=\"ctrl.formClear()\"></pt-search>\n" +
    "      <div flex>\n" +
    "      </div>\n" +
    "      <div class=\"pt-table-header-actions\">\n" +
    "        <md-button class=\"md-raised pt-button pt-button-purple\">Export</md-button><!-- /.pt-button -->\n" +
    "        <md-button class=\"md-primary md-raised pt-button\">Add Order</md-button><!-- /.pt-button -->\n" +
    "      </div>\n" +
    "    </div><!-- /.pt-table-header -->\n" +
    "    <table class=\"pt-table no-bottom-border\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th ng-click=\"ctrl.sort('id')\" ng-class=\"ctrl.tableHeaderClass('id')\">Order</th>\n" +
    "          <th ng-click=\"ctrl.sort('email')\" ng-class=\"ctrl.tableHeaderClass('email')\">Email</th>\n" +
    "          <th ng-click=\"ctrl.sort('amount')\" ng-class=\"ctrl.tableHeaderClass('amount')\">Amount</th>\n" +
    "          <th ng-click=\"ctrl.sort('method')\" ng-class=\"ctrl.tableHeaderClass('method')\">Method</th>\n" +
    "          <th ng-click=\"ctrl.sort('status')\" ng-class=\"ctrl.tableHeaderClass('status')\">Status</th>\n" +
    "          <th ng-click=\"ctrl.sort('attendees')\" ng-class=\"ctrl.tableHeaderClass('attendees')\">Attendees</th>\n" +
    "          <th ng-click=\"ctrl.sort('created')\" ng-class=\"ctrl.tableHeaderClass('created')\">Date</th>\n" +
    "          <th>Actions</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"row in ctrl.people | orderBy:ctrl.sortSettings.field:!ctrl.sortSettings.asc | filter:ctrl.searchFilter as results\">\n" +
    "          <td class=\"pt-table-row-primary\">\n" +
    "            <div layout=\"row\">\n" +
    "              <div class=\"pt-avatar\">\n" +
    "                <img src=\"\" ng-src=\"{{row.img}}\" />\n" +
    "              </div><!-- /.pt-avatar -->\n" +
    "              <div class=\"pt-table-name\" flex>\n" +
    "                <h3 class=\"pt-table-headline\" ng-bind=\"row.name\"></h3>\n" +
    "                <div class=\"pt-table-subhead\">\n" +
    "                  <span hide-xs ng-bind=\"row.id\"></span>\n" +
    "                  <span class=\"pt-table-subhead nowrap\" hide show-xs ng-bind-template=\"{{row.attendees}} Ticket{{row.attendees > 1 ? 's' : ''}} {{row.amount | currency}}\"></span>\n" +
    "                </div><!-- /.pt-table-subhead -->\n" +
    "              </div>\n" +
    "            </div><!-- /layout -->\n" +
    "          </td>\n" +
    "          <td ng-bind=\"row.email\" hide-xs></td>\n" +
    "          <td ng-bind=\"row.amount | currency\" hide-xs></td>\n" +
    "          <td ng-bind=\"row.method\" hide-xs></td>\n" +
    "          <td ng-bind=\"row.status\" hide-xs></td>\n" +
    "          <td ng-bind=\"row.attendees\" hide-xs></td>\n" +
    "          <td ng-bind=\"row.created\" class=\"nowrap align-right-xs\"></td>\n" +
    "          <td class=\"pt-table-actions\" hide-xs>\n" +
    "            <div>\n" +
    "              <md-switch aria-label=\"switch\"></md-switch>\n" +
    "              <md-menu md-position-mode=\"target-right target\">\n" +
    "                <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n" +
    "                  <md-icon md-menu-origin aria-label=\"More\">more_vert</md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                  <md-menu-item>\n" +
    "                    <md-button>\n" +
    "                      Item\n" +
    "                    </md-button>\n" +
    "                  </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "              </md-menu>\n" +
    "            </div><!-- /.pt-table-actions -->\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr ng-if=\"results.length === 0\">\n" +
    "          <td colspan=\"8\">\n" +
    "            <h3>No Results</h3>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table><!-- /.pt-table -->\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('components/table/table.tmpl.html',
    "<div md-theme=\"purpleHeart\" ng-controller=\"TableDemoController as ctrl\">\n" +
    "\n" +
    "  <div class=\"pt-whiteframe-1dp\">\n" +
    "    <div class=\"pt-table-header\" layout=\"row\">\n" +
    "      <pt-search placeholder=\"Search\" on-form-submit=\"ctrl.updateSearch(search)\" on-form-clear=\"ctrl.formClear()\"></pt-search>\n" +
    "      <div flex>\n" +
    "      </div>\n" +
    "      <div class=\"pt-table-header-actions\">\n" +
    "        <md-button class=\"md-raised pt-button pt-button-purple\">Label</md-button><!-- /.pt-button -->\n" +
    "        <md-button class=\"md-primary md-raised pt-button\">Label</md-button><!-- /.pt-button -->\n" +
    "      </div>\n" +
    "    </div><!-- /.pt-table-header -->\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('components/ticketWidget/ticketWidget.tmpl.html',
    ""
  );


  $templateCache.put('components/avatar/avatar.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "\n" +
    ".pt-avatar {\n" +
    "  border-radius: 50%;\n" +
    "  box-sizing: content-box;\n" +
    "  height: 40px;\n" +
    "  width: 40px;\n" +
    "\n" +
    "  &.pt-avatar-xl {\n" +
    "    height: 112px;\n" +
    "    width: 112px;\n" +
    "  }\n" +
    "  &.pt-avatar-lg {\n" +
    "    height: 80px;\n" +
    "    width: 80px;\n" +
    "  }\n" +
    "  &.pt-avatar-sm {\n" +
    "    height: 40px;\n" +
    "    width: 40px;\n" +
    "  }\n" +
    "  &.pt-avatar-xs {\n" +
    "    height: 24px;\n" +
    "    width: 24px;\n" +
    "  }\n" +
    "  img {\n" +
    "    border-radius: 50%;\n" +
    "    height: auto;\n" +
    "    width: 100%;\n" +
    "  }\n" +
    "}\n" +
    "@supports(object-fit: cover) {\n" +
    "  .pt-avatar img {\n" +
    "    height: 100%;\n" +
    "    object-fit: cover;\n" +
    "    object-position: center center;\n" +
    "  }\n" +
    "}\n" +
    "\n"
  );


  $templateCache.put('components/badge/badge-3.less',
    ".pt-chips {\n" +
    "  .md-removable {\n" +
    "    md-chip {\n" +
    "      .md-chip-content {\n" +
    "        font-size: 14px;\n" +
    "        padding-right: 16px;\n" +
    "\n" +
    "        md-icon {\n" +
    "          margin-right: 4px; // approximate for 8px due to inline text\n" +
    "        }\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "}\n"
  );


  $templateCache.put('components/badge/badge.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "\n" +
    ".pt-badge {\n" +
    "  background-color: #424242;\n" +
    "  border-radius: @border-radius-sm;\n" +
    "  box-sizing: border-box;\n" +
    "  color: #fff;\n" +
    "  display: inline-block;\n" +
    "  font-size: @font-size-body-1;\n" +
    "  font-weight: 600;\n" +
    "  height: 24px;\n" +
    "  line-height: 26px;\n" +
    "  min-width: 24px;\n" +
    "  padding: 0 20px;\n" +
    "\n" +
    "  &.pt-pill {\n" +
    "    border-radius: 12px;\n" +
    "  }\n" +
    "  &.pt-badge-sm {\n" +
    "    font-size: 11px;\n" +
    "    height: 16px;\n" +
    "    line-height: 18px;\n" +
    "    padding: 0 12px;\n" +
    "  }\n" +
    "  &.pt-badge-orange {\n" +
    "    background-color: @redOrange;\n" +
    "  }\n" +
    "  &.pt-badge-amaranth {\n" +
    "    background-color: @amaranth;\n" +
    "  }\n" +
    "  &.pt-badge-heart {\n" +
    "    background-color: @purpleHeart;\n" +
    "  }\n" +
    "  &.pt-badge-dodger {\n" +
    "    background-color: @dodgerBlue;\n" +
    "  }\n" +
    "  &.pt-badge-shamrock {\n" +
    "    background-color: @shamrock;\n" +
    "  }\n" +
    "  &.pt-badge-selective {\n" +
    "    background-color: @selectiveYellow;\n" +
    "    color: @black-87;\n" +
    "  }\n" +
    "  &.pt-badge-alt {\n" +
    "    background-color: @grey;\n" +
    "  }\n" +
    "}\n"
  );


  $templateCache.put('components/button/button.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "\n" +
    "button.pt-button::-moz-focus-inner {\n" +
    "  border: 0\n" +
    "}\n" +
    ".pt-button {\n" +
    "  background: 0 0;\n" +
    "  border: none;\n" +
    "  border-radius: @border-radius-base;\n" +
    "  box-sizing: border-box;\n" +
    "  color: currentColor;\n" +
    "  cursor: pointer;\n" +
    "  display: inline-block;\n" +
    "  font-family: @font-family-base;\n" +
    "  font-size: @font-size-body-1;\n" +
    "  font-style: inherit;\n" +
    "  font-variant: inherit;\n" +
    "  font-weight: 600;\n" +
    "  letter-spacing: .04em;\n" +
    "  line-height: 40px;\n" +
    "  margin: 8px;\n" +
    "  min-height: 40px;\n" +
    "  min-width: 88px;\n" +
    "  outline: none;\n" +
    "  overflow: hidden;\n" +
    "  padding: 0 16px;\n" +
    "  position: relative;\n" +
    "  text-align: center;\n" +
    "  text-decoration: none;\n" +
    "  text-transform: none;\n" +
    "  vertical-align: middle;\n" +
    "  white-space: nowrap;\n" +
    "  -webkit-user-select: none;\n" +
    "  -moz-user-select: none;\n" +
    "  -ms-user-select: none;\n" +
    "  user-select: none;\n" +
    "  transition: box-shadow .4s cubic-bezier(.25,.8,.25,1), background-color .4s cubic-bezier(.25,.8,.25,1);\n" +
    "\n" +
    "  &:focus {\n" +
    "    outline: none;\n" +
    "  }\n" +
    "  &:focus,\n" +
    "  &:hover {\n" +
    "    text-decoration: none;\n" +
    "  }\n" +
    "  &.md-default-theme:not([disabled]):hover,\n" +
    "  &:not([disabled]):hover {\n" +
    "    background-color: @black-5;\n" +
    "  }\n" +
    "  &.md-raised:not([disabled]),\n" +
    "  &:not([disabled]).md-raised.md-focused {\n" +
    "    box-shadow: @shadow-button;\n" +
    "  }\n" +
    "  &:not([disabled]).md-raised:active {\n" +
    "    box-shadow: @shadow-button-active;\n" +
    "  }\n" +
    "\n" +
    "  // Used to theme foreground color of white background button\n" +
    "  &.md-button {\n" +
    "    &.pt-button-purple {\n" +
    "      color: @purpleHeart;\n" +
    "    }\n" +
    "    &.pt-button-shamrock {\n" +
    "      color: @shamrock;\n" +
    "    }\n" +
    "    &.pt-button-cerulean {\n" +
    "      color: @ceruleanBlue;\n" +
    "    }\n" +
    "    &.pt-button-purple,\n" +
    "    &.pt-button-shamrock,\n" +
    "    &.pt-button-cerulean {\n" +
    "      &:not([disabled]):hover {\n" +
    "        background-color: @black-5;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  .md-button.md-purpleHeart-theme.md-raised:not([disabled]):hover\n" +
    "\n" +
    "  // With badges\n" +
    "  &.pt-button-badge {\n" +
    "    padding-right: 40px;\n" +
    "  }\n" +
    "  .pt-badge {\n" +
    "    background-color: #424242;\n" +
    "    border-radius: 50%;\n" +
    "    display: block;\n" +
    "    font-size: 13px;\n" +
    "    font-weight: 600;\n" +
    "    height: 24px;\n" +
    "    line-height: 26px;\n" +
    "    margin-top: -12px;\n" +
    "    opacity: .54;\n" +
    "    padding: 0;\n" +
    "    position: absolute;\n" +
    "    right: 8px;\n" +
    "    top: 50%;\n" +
    "    width: 24px;\n" +
    "  }\n" +
    "\n" +
    "  // Alternate sizes\n" +
    "  &.pt-button-lg {\n" +
    "    font-size: @font-size-base;\n" +
    "    line-height: 56px;\n" +
    "    min-height: 56px;\n" +
    "\n" +
    "    &.pt-button-badge {\n" +
    "      padding-right: 48px;\n" +
    "    }\n" +
    "    .pt-badge {\n" +
    "      right: 16px;\n" +
    "    }\n" +
    "  }\n" +
    "  &.pt-button-sm {\n" +
    "    letter-spacing: .02em;\n" +
    "    line-height: 32px;\n" +
    "    min-height: 32px;\n" +
    "\n" +
    "    &.pt-button-badge {\n" +
    "      padding-right: 32px;\n" +
    "    }\n" +
    "    .pt-badge {\n" +
    "      font-size: 11px;\n" +
    "      font-weight: 400;\n" +
    "      height: 16px;\n" +
    "      line-height: 18px;\n" +
    "      margin-top: -8px;\n" +
    "      min-width: 16px;\n" +
    "      width: 16px;\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  &.pt-button-block {\n" +
    "    display: block;\n" +
    "    width: calc(~'100% - 16px');\n" +
    "  }\n" +
    "\n" +
    "}\n"
  );


  $templateCache.put('components/form/form.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "@import (reference) \"../../style/mixins.less\";\n" +
    "\n" +
    "pt-search {\n" +
    "  display: inline-block;\n" +
    "}\n" +
    ".pt-input-group {\n" +
    "  background-color: #fff;\n" +
    "  border: 1px solid @black-12;\n" +
    "  border-radius: @border-radius-base;\n" +
    "  box-sizing: border-box;\n" +
    "  color: @black-54;\n" +
    "  padding-left: 8px;\n" +
    "  // padding-right: 8px;\n" +
    "  position: relative;\n" +
    "  width: 100%;\n" +
    "  .align-items(stretch);\n" +
    "  .flexbox();\n" +
    "  .flex-wrap(wrap);\n" +
    "\n" +
    "  &-prepend,\n" +
    "  &-append {\n" +
    "    .flexbox();\n" +
    "\n" +
    "    .md-icon-button {\n" +
    "      height: 38px;\n" +
    "      margin-left: 0;\n" +
    "      margin-right: 0;\n" +
    "      padding-bottom: 7px;\n" +
    "      padding-top: 7px;\n" +
    "    }\n" +
    "  }\n" +
    "  &-text {\n" +
    "    padding-left: 8px;\n" +
    "    padding-right: 8px;\n" +
    "    text-align: center;\n" +
    "    white-space: nowrap;\n" +
    "    .align-items(center);\n" +
    "    .flexbox();\n" +
    "  }\n" +
    "  * {\n" +
    "    box-sizing: border-box;\n" +
    "  }\n" +
    "  input {\n" +
    "    background-color: #fff;\n" +
    "    background-clip: padding-box;\n" +
    "    border: none;\n" +
    "    border-radius: @border-radius-base;\n" +
    "    color: @black-54;\n" +
    "    display: block;\n" +
    "    font-family: @font-family-base;\n" +
    "    font-size: @font-size-body-1;\n" +
    "    line-height: 22px;\n" +
    "    margin: 0;\n" +
    "    overflow: visible;\n" +
    "    padding: 8px 0;\n" +
    "    position: relative;\n" +
    "    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n" +
    "    width: 1%;\n" +
    "    .flex-grow(1);\n" +
    "    .flex-shrink(1);\n" +
    "\n" +
    "    &:focus {\n" +
    "      border-bottom: 1px solid @purpleHeart;\n" +
    "      padding-bottom: 7px;\n" +
    "      outline: 0;\n" +
    "      z-index: 3;\n" +
    "    }\n" +
    "    &:not(:first-child) {\n" +
    "      border-top-left-radius: 0;\n" +
    "      border-bottom-left-radius: 0;\n" +
    "    }\n" +
    "    &:not(:last-child) {\n" +
    "      border-top-right-radius: 0;\n" +
    "      border-bottom-right-radius: 0;\n" +
    "    }\n" +
    "    @media @gt-xs {\n" +
    "      min-width: 246px;\n" +
    "    }\n" +
    "  }\n" +
    "}\n"
  );


  $templateCache.put('components/list/list.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "\n" +
    ".md-subheader.pt-list-subheader {\n" +
    "  color: @black-87;\n" +
    "  font-size: @font-size-base;\n" +
    "  font-weight: 600;\n" +
    "  line-height: 1.5;\n" +
    "\n" +
    "  & + md-list {\n" +
    "    padding-bottom: 16px;\n" +
    "    padding-top: 0;\n" +
    "  }\n" +
    "}\n" +
    "md-list.pt-list {\n" +
    "  border-top: 1px solid @black-12;\n" +
    "  margin: 8px 0;\n" +
    "  padding: 0;\n" +
    "\n" +
    "  md-list-item {\n" +
    "    border-bottom: 1px solid @black-12;\n" +
    "    min-height: 56px;\n" +
    "    padding: 0;\n" +
    "\n" +
    "    .md-list-item-inner {\n" +
    "      min-height: 56px;\n" +
    "    }\n" +
    "    &.md-2-line\n" +
    "    &.md-3-line {\n" +
    "      .md-list-item-inner {\n" +
    "        min-height: 72px;\n" +
    "      }\n" +
    "      &::before,\n" +
    "      & > .md-no-style::before {\n" +
    "        min-height: 72px;\n" +
    "      }\n" +
    "    }\n" +
    "    h3 {\n" +
    "      font-weight: normal;\n" +
    "      margin: 0;\n" +
    "    }\n" +
    "    &._md-button-wrap > div.md-button:first-child,\n" +
    "    &.md-no-proxy,\n" +
    "    .md-no-style {\n" +
    "      padding: 0;\n" +
    "    }\n" +
    "    .md-icon-button {\n" +
    "      color: @black-26;\n" +
    "      margin: 0;\n" +
    "\n" +
    "      &:hover {\n" +
    "        color: @black-54;\n" +
    "      }\n" +
    "      md-icon.md-default-theme, md-icon {\n" +
    "        color: inherit;\n" +
    "\n" +
    "        &:hover {\n" +
    "          color: inherit;\n" +
    "        }\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  &.pt-list-dark {\n" +
    "    border-top-color: @white-12;\n" +
    "\n" +
    "    md-list-item,\n" +
    "    md-list-item.md-2-line,\n" +
    "    md-list-item.md-3-line {\n" +
    "      border-bottom-color: @white-12;\n" +
    "\n" +
    "      .md-list-item-text {\n" +
    "        h3,\n" +
    "        h4 {\n" +
    "          color: #fff;\n" +
    "        }\n" +
    "        p {\n" +
    "          color: @white-70;\n" +
    "        }\n" +
    "      }\n" +
    "      .md-icon-button {\n" +
    "        color: @white-30;\n" +
    "\n" +
    "        &:hover {\n" +
    "          color: @white-50;\n" +
    "        }\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  &.pt-list-no-border {\n" +
    "    border-top: none;\n" +
    "\n" +
    "    md-list-item {\n" +
    "      border-bottom: none;\n" +
    "    }\n" +
    "  }\n" +
    "  &.pt-list-no-top-border {\n" +
    "    border-top: none;\n" +
    "  }\n" +
    "  &.pt-list-no-bottom-border md-list-item:last-child {\n" +
    "    border-bottom: none;\n" +
    "  }\n" +
    "  .md-secondary-container md-switch,\n" +
    "  .md-list-item-inner .md-secondary-container md-switch {\n" +
    "    margin-left: 8px;\n" +
    "  }\n" +
    "}\n"
  );


  $templateCache.put('components/menu/menu.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "\n" +
    "md-menu-item {\n" +
    "  & >.md-button {\n" +
    "    font-size: @font-size-body-1;\n" +
    "\n" +
    "    &.md-purpleHeart-theme:not([disabled]),\n" +
    "    &.md-cerulean-theme:not([disabled]) {\n" +
    "      &.md-focused,\n" +
    "      &:hover {\n" +
    "        background-color: @black-5;\n" +
    "      }\n" +
    "    }\n" +
    "    span {\n" +
    "      vertical-align: middle;\n" +
    "    }\n" +
    "    p {\n" +
    "      font-size: @font-size-body-1;\n" +
    "    }\n" +
    "    div {\n" +
    "      md-icon:last-child {\n" +
    "        margin: auto 0 auto 8px;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "}\n"
  );


  $templateCache.put('components/snackbar/snackbar.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "@import (reference) \"../../style/mixins.less\";\n" +
    "\n" +
    ".pt-toast {\n" +
    "  z-index: 105;\n" +
    "  -webkit-font-smoothing: initial;\n" +
    "\n" +
    "  .md-dialog-is-showing & {\n" +
    "    z-index: 100000000;\n" +
    "  }\n" +
    "  &.md-center {\n" +
    "    left: 50%;\n" +
    "    .translate3d(-50%, 0, 0);\n" +
    "  }\n" +
    "  .md-toast-content {\n" +
    "    border-radius: @border-radius-base;\n" +
    "    min-height: 32px;\n" +
    "    padding: 8px 18px; // md-toast-text already has 6px l/r padding\n" +
    "    .align-items(flex-start);\n" +
    "\n" +
    "    &::before {\n" +
    "      min-height: 32px;\n" +
    "    }\n" +
    "    .md-toast-text {\n" +
    "      padding: 8px 6px;\n" +
    "    }\n" +
    "    .md-button {\n" +
    "      font-weight: 600;\n" +
    "      margin-bottom: 0;\n" +
    "      margin-top: 0;\n" +
    "    }\n" +
    "  }\n" +
    "  @media @lt-md {\n" +
    "    left: 16px;\n" +
    "    right: 16px;\n" +
    "    width: calc(~'100% - 32px');\n" +
    "  }\n" +
    "  @media @gt-sm {\n" +
    "    max-width: 400px;\n" +
    "  }\n" +
    "  &.md-purpleHeart-theme {\n" +
    "    .md-toast-content {\n" +
    "      .md-button.md-action:not(.md-accent):not(.md-warn) {\n" +
    "        color: @purpleHeart-300;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  &.md-cerulean-theme {\n" +
    "    .md-toast-content {\n" +
    "      .md-button.md-action:not(.md-accent):not(.md-warn) {\n" +
    "        color: @ceruleanBlue-a200;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "}\n"
  );


  $templateCache.put('components/table/table.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "@import (reference) \"../../style/mixins.less\";\n" +
    "\n" +
    ".pt-table-header{\n" +
    "  border-bottom: 1px solid @black-12;\n" +
    "  padding: 16px;\n" +
    "\n" +
    "  &-actions {\n" +
    "    .flexbox();\n" +
    "\n" +
    "    .pt-button {\n" +
    "      display: block;\n" +
    "      margin-bottom: 0;\n" +
    "      margin-top: 0;\n" +
    "    }\n" +
    "  }\n" +
    "  &.no-border {\n" +
    "    border-bottom: none;\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    ".pt-table {\n" +
    "  border-collapse: separate;\n" +
    "  color: @black-87;\n" +
    "  overflow: hidden;\n" +
    "  width: 100%;\n" +
    "\n" +
    "  .pt-table-header + & {\n" +
    "    border-top: 1px solid @black-12;\n" +
    "  }\n" +
    "  thead {\n" +
    "    display: none;\n" +
    "  }\n" +
    "  td,\n" +
    "  th {\n" +
    "    background-color: #fff;\n" +
    "    border-bottom: 1px solid @black-12;\n" +
    "    color: @black-87;\n" +
    "    font-size: @font-size-body-1;\n" +
    "    line-height: 24px;\n" +
    "    padding: 0 24px;\n" +
    "    vertical-align: inherit;\n" +
    "\n" +
    "    &.align-right {\n" +
    "      text-align: right;\n" +
    "    }\n" +
    "    &.align-center {\n" +
    "      text-align: center;\n" +
    "    }\n" +
    "  }\n" +
    "  td {\n" +
    "    color: @black-54;\n" +
    "    font-size: @font-size-caption;\n" +
    "    font-weight: normal;\n" +
    "    padding-bottom: 8px;\n" +
    "    padding-top: 8px;\n" +
    "    padding-bottom: 16px;\n" +
    "    padding-top: 16px;\n" +
    "\n" +
    "    &.align-right-xs {\n" +
    "      text-align: right;\n" +
    "    }\n" +
    "    a {\n" +
    "      color: @black-87;\n" +
    "\n" +
    "      &:hover{\n" +
    "        color: @black-87;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  & &-actions {\n" +
    "    padding: 8px 16px 8px 24px;;\n" +
    "    width: 1px;\n" +
    "\n" +
    "    div {\n" +
    "      .align-items(center);\n" +
    "      .flexbox();\n" +
    "      .justify-content(flex-end);\n" +
    "\n" +
    "      md-switch {\n" +
    "        margin: 0\n" +
    "      }\n" +
    "      md-menu {\n" +
    "        &:last-child {\n" +
    "          .md-button {\n" +
    "            margin: 0;\n" +
    "          }\n" +
    "        }\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  & &-row-primary {\n" +
    "    max-width: 100%;\n" +
    "    width: 1px;\n" +
    "    .flex-grow(1);\n" +
    "\n" +
    "    & >.layout-row > *:last-child:not(:first-child) {\n" +
    "      padding-left: 16px;\n" +
    "    }\n" +
    "  }\n" +
    "  & &-headline {\n" +
    "    color: @black-87;\n" +
    "    display: block;\n" +
    "    font-size: @font-size-body-1;\n" +
    "    font-weight: 400;\n" +
    "    line-height: 20px;\n" +
    "    margin: 0;\n" +
    "    max-width: 100%;\n" +
    "    overflow: hidden;\n" +
    "    text-overflow: ellipsis;\n" +
    "    white-space: nowrap;\n" +
    "  }\n" +
    "  & &-subhead {\n" +
    "    color: @black-54;\n" +
    "    display: block;\n" +
    "    font-size: @font-size-caption;\n" +
    "    line-height: 20px;\n" +
    "  }\n" +
    "  &.no-bottom-border {\n" +
    "    tbody {\n" +
    "      tr:last-child {\n" +
    "        td {\n" +
    "          border-bottom: none;\n" +
    "        }\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  .nowrap {\n" +
    "    white-space: nowrap;\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "\n" +
    "@media @gt-xs {\n" +
    "  .pt-table {\n" +
    "    display: table;\n" +
    "    border-collapse: separate;\n" +
    "    border-spacing: 0;\n" +
    "    width: 100%;\n" +
    "\n" +
    "    thead {\n" +
    "      display: table-header-group;\n" +
    "      vertical-align: middle;\n" +
    "\n" +
    "      th {\n" +
    "        font-weight: 600;\n" +
    "        height: 56px;\n" +
    "        text-align: left;\n" +
    "        white-space: nowrap;\n" +
    "\n" +
    "        &:focus {\n" +
    "          outline: 0;\n" +
    "        }\n" +
    "        &.width-80 {\n" +
    "          width: 80px;\n" +
    "        }\n" +
    "        &::after {\n" +
    "          background-repeat: no-repeat;\n" +
    "          background-position: right center;\n" +
    "          color: @black-26;\n" +
    "          content: 'keyboard_arrow_down';\n" +
    "          direction: ltr;\n" +
    "          display: inline-block;\n" +
    "          font-family: 'Material Icons';\n" +
    "          font-size: 24px;\n" +
    "          font-style: normal;\n" +
    "          font-weight: normal;\n" +
    "          letter-spacing: normal;\n" +
    "          line-height: 1;\n" +
    "          margin-left: 4px;\n" +
    "          opacity: 0;\n" +
    "          text-transform: none;\n" +
    "          vertical-align: top;\n" +
    "          white-space: nowrap;\n" +
    "          word-wrap: normal;\n" +
    "          -webkit-font-feature-settings: 'liga';\n" +
    "          -webkit-font-smoothing: antialiased;\n" +
    "          .translateY(-25%);\n" +
    "          .transition(all .3s ease-in-out);\n" +
    "        }\n" +
    "        &[ng-click] {\n" +
    "          cursor: pointer;\n" +
    "\n" +
    "          &:hover::after {\n" +
    "            opacity: .46; // roughly @black-12\n" +
    "            .translateY(0%);\n" +
    "          }\n" +
    "        }\n" +
    "        &.th-sort-active::after {\n" +
    "          opacity: 1;\n" +
    "          .translateY(0%);\n" +
    "        }\n" +
    "        &.th-sort-asc::after {\n" +
    "          content: 'keyboard_arrow_up'\n" +
    "        }\n" +
    "        &.th-sort-desc::after {\n" +
    "          content: 'keyboard_arrow_down'\n" +
    "        }\n" +
    "      }\n" +
    "    }\n" +
    "    & &-headline {\n" +
    "      font-size: @font-size-base;\n" +
    "    }\n" +
    "    td {\n" +
    "      color: @black-87;\n" +
    "      font-size: @font-size-body-1;\n" +
    "\n" +
    "      &.align-right-xs {\n" +
    "        text-align: initial;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "}\n"
  );


  $templateCache.put('components/whiteframe/whiteframe.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "\n" +
    ".pt-whiteframe-1dp,\n" +
    ".pt-whiteframe-2dp {\n" +
    "  background-color: #fff;\n" +
    "  overflow: auto;\n" +
    "}\n" +
    ".pt-whiteframe-1dp {\n" +
    "  box-shadow: 0 2px 4px @black-12;\n" +
    "}\n" +
    ".pt-whiteframe-2dp {\n" +
    "  box-shadow: 0 2px 8px @black-12;\n" +
    "}\n"
  );


  $templateCache.put('components/badge/badge-3.coffee',
    "angular.module('Picatic.Components').controller('Badge3DemoController', [ () ->\n" +
    "  self = this\n" +
    "  self.fruitNames = [\n" +
    "    'Apple'\n" +
    "    'Banana'\n" +
    "    'Orange'\n" +
    "  ]\n" +
    "\n" +
    "  self.newVeg = (chip) ->\n" +
    "    {\n" +
    "      name: chip\n" +
    "    }\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('components/list/list-2.coffee',
    "angular.module('Picatic.Components').controller('List2DemoController', [ () ->\n" +
    "  self = this\n" +
    "  self.people = [\n" +
    "    { name: 'Aiden Keller', img: 'img/aiden.jpg', email: 'aiden@gmail.com', created: 'Apr 18, 2017' }\n" +
    "    { name: 'Tillie Fleming', img: 'img/tillie.jpg', email: 'tillie@gmail.com', created: 'Apr 17, 2017' }\n" +
    "    { name: 'Allie Reyes', img: 'img/allie.jpg', email: 'allie@gmail.com', created: 'Apr 16, 2017' }\n" +
    "    { name: 'Leon Larson', img: 'img/leon.jpg', email: 'leon@gmail.com', created: 'Apr 15, 2017' }\n" +
    "    { name: 'Steven Allen', img: 'img/steven.jpg', email: 'steven@gmail.com', created: 'Apr 14, 2017' }\n" +
    "  ]\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('components/list/list.coffee',
    "angular.module('Picatic.Components').controller('ListDemoController', [ () ->\n" +
    "  self = this\n" +
    "  self.toppings = [\n" +
    "    { name: 'Pepperoni', wanted: true },\n" +
    "    { name: 'Sausage', wanted: false },\n" +
    "    { name: 'Black Olives', wanted: true },\n" +
    "    { name: 'Green Peppers', wanted: false }\n" +
    "  ]\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('components/menu/menu-2.coffee',
    ""
  );


  $templateCache.put('components/menu/menu.coffee',
    "angular.module('Picatic.Components').controller('MenuDemoController', [ '$mdToast', ($mdToast) ->\n" +
    "  self = this\n" +
    "\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('components/snackbar/snackbar.coffee',
    "angular.module('Picatic.Components').controller('SnackbarDemoController', [ '$mdToast', ($mdToast) ->\n" +
    "  self = this\n" +
    "  self.popToast1 = () ->\n" +
    "    $mdToast.show(\n" +
    "      $mdToast.simple()\n" +
    "        .textContent('Message sent')\n" +
    "        .hideDelay(6500)\n" +
    "        .position('bottom center')\n" +
    "        .toastClass('pt-toast')\n" +
    "        .theme('purpleHeart')\n" +
    "    )\n" +
    "\n" +
    "  self.popToast2 = (highlightClass=null) ->\n" +
    "    $mdToast.show(\n" +
    "      $mdToast.simple()\n" +
    "        .textContent('Message sent')\n" +
    "        .action('Undo')\n" +
    "        .hideDelay(0)\n" +
    "        .position('bottom center')\n" +
    "        .toastClass('pt-toast')\n" +
    "        .theme('purpleHeart')\n" +
    "        .highlightAction(true)\n" +
    "        .highlightClass(highlightClass)\n" +
    "    )\n" +
    "\n" +
    "  self.popToast3 = () ->\n" +
    "    $mdToast.show(\n" +
    "      $mdToast.simple()\n" +
    "        .textContent('Connection timed out. You will see limited information until you reconnect.')\n" +
    "        .hideDelay(6500)\n" +
    "        .position('bottom center')\n" +
    "        .toastClass('pt-toast')\n" +
    "        .theme('purpleHeart')\n" +
    "    )\n" +
    "\n" +
    "  self.popToast4 = () ->\n" +
    "    $mdToast.show(\n" +
    "      $mdToast.simple()\n" +
    "        .textContent('Connection timed out. You will see limited information until you reconnect.')\n" +
    "        .action('Reload')\n" +
    "        .hideDelay(0)\n" +
    "        .position('bottom center')\n" +
    "        .toastClass('pt-toast')\n" +
    "        .theme('purpleHeart')\n" +
    "    )\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('components/table/table-2.coffee',
    "angular.module('Picatic.Components').controller('Table2DemoController', [ () ->\n" +
    "  self = this\n" +
    "  self.rows = [\n" +
    "    {\n" +
    "      col: 'col1'\n" +
    "      name: 'Col 1'\n" +
    "    }\n" +
    "    {\n" +
    "      col: 'col2'\n" +
    "      name: 'Col 2'\n" +
    "    }\n" +
    "    {\n" +
    "      col: 'col3'\n" +
    "      name: 'Col 3'\n" +
    "    }\n" +
    "    {\n" +
    "      col: 'col4'\n" +
    "      name: 'Col 4'\n" +
    "    }\n" +
    "    {\n" +
    "      col: 'col5'\n" +
    "      name: 'Col 5'\n" +
    "    }\n" +
    "    {\n" +
    "      col: 'col6'\n" +
    "      name: 'Col 6'\n" +
    "    }\n" +
    "    {\n" +
    "      col: 'col7'\n" +
    "      name: 'Col 7'\n" +
    "    }\n" +
    "    {\n" +
    "      col: 'col8'\n" +
    "      name: 'Col 8'\n" +
    "    }\n" +
    "  ]\n" +
    "  self.sortSettings =\n" +
    "    field: null\n" +
    "    asc: false\n" +
    "\n" +
    "  self.sort = (field) ->\n" +
    "    if field is self.sortSettings.field\n" +
    "      self.sortSettings.asc = !self.sortSettings.asc\n" +
    "    else\n" +
    "      self.sortSettings.field = field\n" +
    "      self.sortSettings.asc = false\n" +
    "    return\n" +
    "\n" +
    "  self.tableHeaderClass = (field) ->\n" +
    "    cellClass = []\n" +
    "    if field is self.sortSettings.field\n" +
    "      cellClass.push('th-sort-active')\n" +
    "      if self.sortSettings.asc\n" +
    "        cellClass.push('th-sort-asc')\n" +
    "      else\n" +
    "        cellClass.push('th-sort-desc')\n" +
    "    return cellClass.join(' ')\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('components/table/table-3.coffee',
    "angular.module('Picatic.Components').controller('Table3DemoController', [ () ->\n" +
    "  self = this\n" +
    "  self.row1 = ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5', 'Col 6', 'Col 7']\n" +
    "  self.row2 = angular.copy(self.row1)\n" +
    "  self.row2.push('Col 8')\n" +
    "  self.row3 =\n" +
    "    avatar: 'img/aiden.jpg'\n" +
    "    name: 'Carl Harrison'\n" +
    "    caption: 'Col 1 Caption'\n" +
    "    columns: ['Col 2', 'Col 3', 'Col 4', 'Col 5', 'Col 6', 'Col 7']\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('components/table/table-4.coffee',
    "angular.module('Picatic.Components').controller('Table4DemoController', [ () ->\n" +
    "  self = this\n" +
    "  self.people = [\n" +
    "    {\n" +
    "      name: 'Aiden Keller'\n" +
    "      img: 'img/aiden.jpg'\n" +
    "      id: '1476781'\n" +
    "      email: 'aiden@gmail.com'\n" +
    "      amount: '476.50'\n" +
    "      method: 'card'\n" +
    "      status: 'paid'\n" +
    "      attendees: 4\n" +
    "      created: '2017-04-18'\n" +
    "    }\n" +
    "    {\n" +
    "      name: 'Tillie Fleming'\n" +
    "      img: 'img/tillie.jpg'\n" +
    "      id: '1476780'\n" +
    "      email: 'tillie@gmail.com'\n" +
    "      amount: '200'\n" +
    "      method: 'card'\n" +
    "      status: 'paid'\n" +
    "      attendees: 1\n" +
    "      created: '2017-04-17'\n" +
    "    }\n" +
    "    {\n" +
    "      name: 'Allie Reyes'\n" +
    "      img: 'img/allie.jpg'\n" +
    "      id: '1476779'\n" +
    "      email: 'allie@gmail.com'\n" +
    "      amount: '400'\n" +
    "      method: 'invoice'\n" +
    "      status: 'unpaid'\n" +
    "      attendees: 4\n" +
    "      created: '2017-04-16'\n" +
    "    }\n" +
    "    {\n" +
    "      name: 'Leon Larson'\n" +
    "      img: 'img/leon.jpg'\n" +
    "      id: '1476778'\n" +
    "      email: 'leon@gmail.com'\n" +
    "      amount: '100'\n" +
    "      method: 'card'\n" +
    "      status: 'paid'\n" +
    "      attendees: 3\n" +
    "      created: '2017-04-15'\n" +
    "    }\n" +
    "    {\n" +
    "      name: 'Steven Allen'\n" +
    "      img: 'img/steven.jpg'\n" +
    "      id: '1476777'\n" +
    "      email: 'steven@gmail.com'\n" +
    "      amount: '0'\n" +
    "      method: 'card'\n" +
    "      status: 'paid'\n" +
    "      attendees: 4\n" +
    "      created: '2017-04-14'\n" +
    "    }\n" +
    "  ]\n" +
    "  self.sortSettings =\n" +
    "    field: 'id'\n" +
    "    asc: false\n" +
    "  self.searchFilter = undefined\n" +
    "\n" +
    "  self.updateSearch = (result) ->\n" +
    "    console.log result\n" +
    "    self.searchFilter = result\n" +
    "    return\n" +
    "\n" +
    "  self.formClear = () ->\n" +
    "    self.searchFilter = undefined\n" +
    "    return\n" +
    "\n" +
    "  self.sort = (field) ->\n" +
    "    if field is self.sortSettings.field\n" +
    "      self.sortSettings.asc = !self.sortSettings.asc\n" +
    "    else\n" +
    "      self.sortSettings.field = field\n" +
    "      self.sortSettings.asc = false\n" +
    "    return\n" +
    "\n" +
    "  self.tableHeaderClass = (field) ->\n" +
    "    cellClass = []\n" +
    "    if field is self.sortSettings.field\n" +
    "      cellClass.push('th-sort-active')\n" +
    "      if self.sortSettings.asc\n" +
    "        cellClass.push('th-sort-asc')\n" +
    "      else\n" +
    "        cellClass.push('th-sort-desc')\n" +
    "    return cellClass.join(' ')\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('components/table/table.coffee',
    "angular.module('Picatic.Components').controller('TableDemoController', [ '$mdDialog', ($mdDialog) ->\n" +
    "  self = this\n" +
    "\n" +
    "  self.updateSearch = (result) ->\n" +
    "    $mdDialog.show(\n" +
    "      $mdDialog.alert()\n" +
    "        .title('Search Text')\n" +
    "        .textContent(\"You searched for '#{result}'.\")\n" +
    "        .ok('OK!')\n" +
    "        .theme('purpleHeart')\n" +
    "    );\n" +
    "    return\n" +
    "\n" +
    "  self.formClear = () ->\n" +
    "    $mdDialog.show(\n" +
    "      $mdDialog.alert()\n" +
    "        .title('Clear Search Field')\n" +
    "        .textContent(\"The search field has been cleared.\")\n" +
    "        .ok('OK!')\n" +
    "        .theme('purpleHeart')\n" +
    "    );\n" +
    "\n" +
    "  return\n" +
    "])\n"
  );


  $templateCache.put('style/typography/typography.tmpl.html',
    "<h1 class=\"pt-display-5\">Bold 104</h1>\n" +
    "<h1 class=\"pt-display-4\">Bold 72</h1>\n" +
    "<h1 class=\"pt-display-3\">Bold 56</h1>\n" +
    "<h1 class=\"pt-display-2\">Regular 45</h1>\n" +
    "<h2 class=\"pt-display-1\">Regular 34</h2>\n" +
    "<p class=\"pt-headline\">Regular 24</p>\n" +
    "<p class=\"pt-title\">Medium 20</p>\n" +
    "<p class=\"pt-subhead\">Regular 18</p>\n" +
    "<p class=\"pt-body-3\">Medium 18</p>\n" +
    "<p class=\"pt-body-2\">Regular 16</p>\n" +
    "<p class=\"pt-body-1\">Regular 14</p>\n" +
    "<p class=\"pt-caption-2\">Regular 14</p>\n" +
    "<p class=\"pt-caption-1\">Regular 12</p>\n"
  );


  $templateCache.put('style/mixins.less',
    "\n" +
    ".translate3d(@x; @y; @z) {\n" +
    "  -webkit-transform: translate3d(@x, @y, @z);\n" +
    "          transform: translate3d(@x, @y, @z);\n" +
    "}\n" +
    ".translateY(@y) {\n" +
    "  -webkit-transform: translateY(@y);\n" +
    "          transform: translateY(@y);\n" +
    "}\n" +
    ".transition(@transition) {\n" +
    "  -webkit-transition: @transition;\n" +
    "          transition: @transition;\n" +
    "}\n" +
    ".flexbox() {\n" +
    "  display: -ms-flexbox;\n" +
    "  display: -webkit-flex;\n" +
    "  display: flex;\n" +
    "}\n" +
    ".align-items(@val) {\n" +
    "  -ms-flex-align: @val;\n" +
    "  -webkit-align-items: @val;\n" +
    "  align-items: @val;\n" +
    "}\n" +
    ".justify-content(@val) {\n" +
    "  -ms-flex-pack: @val;\n" +
    "  -webkit-justify-content: @val;\n" +
    "  justify-content: @val;\n" +
    "}\n" +
    ".flex-grow(@val) {\n" +
    "  -webkit-flex-grow: @val;\n" +
    "  flex-grow: @val;\n" +
    "}\n" +
    ".flex-shrink(@val) {\n" +
    "  -webkit-flex-shrink: @val;\n" +
    "  flex-shrink: @val;\n" +
    "}\n" +
    ".flex-wrap(@val) {\n" +
    "  -ms-flex-wrap: @val;\n" +
    "  flex-wrap: @val;\n" +
    "}\n"
  );


  $templateCache.put('style/typography/typography.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "\n" +
    "@ff-base:      'Avenir Next W01', 'Nunito Sans', sans-serif;\n" +
    "@ff-accent:    'Futura PT Multilingual W01', 'Futura', sans-serif;\n" +
    "@black-87:     rgba(0,0,0,.87);\n" +
    "@black-54:     rgba(0,0,0,.54);\n" +
    "@white-70:     rgba(255,255,255,.7);\n" +
    "\n" +
    "\n" +
    "// `-adjusted` is for normalizing our Futura PT to equate to Futura used in Sketch\n" +
    "\n" +
    ".pt-display-5 {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-accent;\n" +
    "  font-size: @font-size-display-5;\n" +
    "  font-weight: 700;\n" +
    "  letter-spacing: -4px;\n" +
    "  line-height: 1;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-display-4 {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-accent;\n" +
    "  font-size: @font-size-display-4;\n" +
    "  font-weight: 700;\n" +
    "  letter-spacing: -2px;\n" +
    "  line-height: 1;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-display-3 {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-accent;\n" +
    "  font-size: @font-size-display-3;\n" +
    "  font-weight: 700;\n" +
    "  letter-spacing: -2px;\n" +
    "  line-height: 1;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-display-2 {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-display-3;\n" +
    "  font-weight: 400;\n" +
    "  line-height: 48px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-display-1 {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-display-1;\n" +
    "  font-weight: 400;\n" +
    "  line-height: 40px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-headline {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-headline;\n" +
    "  font-weight: 400;\n" +
    "  line-height: 32px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-title {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-title;\n" +
    "  font-weight: 600;\n" +
    "  line-height: 24px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-subhead {\n" +
    "  color: @black-54;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-subhead;\n" +
    "  font-weight: 400;\n" +
    "  line-height: 24px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: @white-70;\n" +
    "  }\n" +
    "}\n" +
    ".pt-body-3 {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-base;\n" +
    "  font-weight: 600;\n" +
    "  line-height: 24px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-body-2 {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-base;\n" +
    "  font-weight: 400;\n" +
    "  line-height: 24px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-body-1 {\n" +
    "  color: @black-87;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-body-1;\n" +
    "  font-weight: 400;\n" +
    "  line-height: 20px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "}\n" +
    ".pt-caption-2 {\n" +
    "  color: @black-54;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-body-1;\n" +
    "  font-weight: 400;\n" +
    "  line-height: 20px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: @white-70;\n" +
    "  }\n" +
    "}\n" +
    ".pt-caption-1 {\n" +
    "  color: @black-54;\n" +
    "  font-family: @ff-base;\n" +
    "  font-size: @font-size-caption;\n" +
    "  font-weight: 400;\n" +
    "  line-height: 20px;\n" +
    "\n" +
    "  &.pt-inverse {\n" +
    "    color: @white-70;\n" +
    "  }\n" +
    "}\n"
  );


  $templateCache.put('style/variables.less',
    "//\n" +
    "// Variables\n" +
    "// --------------------------------------------------\n" +
    "\n" +
    "@grid-block:            8px;\n" +
    "\n" +
    "//== Colors\n" +
    "  @grey:                  #9e9e9e;\n" +
    "  @grey-light:            #eee;\n" +
    "  @grey-lightest:         #f7f7f7;\n" +
    "  @white-12:              rgba(255,255,255,0.12);\n" +
    "  @white-30:              rgba(255,255,255,0.30);\n" +
    "  @white-50:              rgba(255,255,255,0.50);\n" +
    "  @white-70:              rgba(255,255,255,0.70);\n" +
    "  @white-100:             #fff;\n" +
    "  @black-5:               rgba(0,0,0,0.05); // solid = #f2f2f2\n" +
    "  @black-12:              rgba(0,0,0,0.12); // solid = #e0e0e0\n" +
    "  @black-26:              rgba(0,0,0,0.26); // solid = #bcbcbc\n" +
    "  @black-38:              rgba(0,0,0,0.38); // solid = #9d9d9d\n" +
    "  @black-54:              rgba(0,0,0,0.54); // solid = #757575\n" +
    "  @black-87:              rgba(0,0,0,0.87); // solid = #212121\n" +
    "\n" +
    "// Accent colors\n" +
    "  @blackPearl:            #070826;\n" +
    "  @blackPearl-54:         rgba(7, 8, 38, 0.54);\n" +
    "\n" +
    "  @torchRed:              #ff1a53;\n" +
    "\n" +
    "  @redOrange:             rgb(255,70,50); // #ff4632\n" +
    "  @redOrange-400:         #f95b53;\n" +
    "  @redOrange-600:         #f13b32;\n" +
    "  @redOrange-700:         #e1332d;\n" +
    "\n" +
    "  @amaranth:              rgb(236,64,103); // #ec4067\n" +
    "  @amaranth-400:          #ef6182;\n" +
    "  @amaranth-700:          #e31c58;\n" +
    "\n" +
    "  @seance:                rgb(156,39,176); // #9c27b0\n" +
    "  @seance-400:            #ab47bc;\n" +
    "  @seance-700:            #7b1fa2;\n" +
    "\n" +
    "  @purpleHeart:           rgb(103,58,183); // #673ab7\n" +
    "  @purpleHeart-300:       #9575cd;\n" +
    "  @purpleHeart-400:       #7e57c2;\n" +
    "  @purpleHeart-700:       #512da8;\n" +
    "  @purpleHeart-12:        rgba(103,58,183,.12);\n" +
    "  @purpleHeart-26:        rgba(103,58,183,.26);\n" +
    "\n" +
    "  @ceruleanBlue:          rgb(63,81,181); // #3f51b5\n" +
    "  @ceruleanBlue-400:      #5c6bc0;\n" +
    "  @ceruleanBlue-700:      #303f9f;\n" +
    "  @ceruleanBlue-a200:     #536dfe;\n" +
    "  @ceruleanBlue-12:       rgba(63,81,181,.12);\n" +
    "  @ceruleanBlue-26:       rgba(63,81,181,.26);\n" +
    "\n" +
    "  @dodgerBlue:            rgb(33,150,243); // #2196f3\n" +
    "  @dodgerBlue-87:         rgba(33,150,243,.87); // #2196f3\n" +
    "  @dodgerBlue-400:        #42a5f5;\n" +
    "  @dodgerBlue-700:        #1976d2;\n" +
    "\n" +
    "  @skyBlue:               rgb(14,220,250); // #0edcfa\n" +
    "  @skyBlue-400:           #36e2fb;\n" +
    "  @skyBlue-700:           #04bed7;\n" +
    "\n" +
    "  @shamrock:              rgb(52,203,123); // #34cb7b\n" +
    "  @shamrock-400:          #56d292;\n" +
    "  @shamrock-700:          #26a664;\n" +
    "  @shamrock-12:           rgba(52,203,123,.12);\n" +
    "  @shamrock-26:           rgba(52,203,123,.26);\n" +
    "\n" +
    "  @malachite:             rgb(12,196,27); // #0cc41b\n" +
    "  @malachite-400:         #34ce41;\n" +
    "  @malachite-700:         #099314;\n" +
    "\n" +
    "  @pear:                  rgb(205,220,57); // #cddc39\n" +
    "  @pear-400:              #d4e157;\n" +
    "  @pear-700:              #afb42b;\n" +
    "\n" +
    "  @gorse:                 rgb(255,235,59); // #ffeb3b\n" +
    "  @gorse-400:             #ffee58;\n" +
    "  @gorse-700:             #fbc02d;\n" +
    "\n" +
    "  @selectiveYellow:       rgb(255,183,12); // #ffb70c\n" +
    "  @selectiveYellow-400:   #ffc02e;\n" +
    "  @selectiveYellow-700:   #ff9705;\n" +
    "\n" +
    "  @pizazz:                rgb(255,149,5); // #ff9505\n" +
    "  @pizazz-400:            #ffa629;\n" +
    "  @pizazz-700:            #fa7900;\n" +
    "\n" +
    "  @flamingo:              rgb(255,87,34); // #ff5722\n" +
    "  @flamingo-400:          #ff7043;\n" +
    "  @flamingo-700:          #e64a19;\n" +
    "\n" +
    "\n" +
    "//** Standard box shadow\n" +
    "  @shadow:                0 2px 5px @black-26;\n" +
    "  @alt-shadow:            0 2px 4px @black-12;\n" +
    "  @light-shadow:          0 2px 5px @black-5;\n" +
    "  @card-shadow:           0 2px 4px 0 @black-5, 0 2px 16px 0 @black-5;\n" +
    "  @shadow-button:         0 0 2px 0 @black-12, 0 2px 5px 0 @black-12;\n" +
    "  @shadow-button-active:  0 0 2px 0 @black-12, 0 4px 8px 0 @black-26;\n" +
    "  @shadow-button-purpleHeart:         0 0 2px 0 @purpleHeart-12, 0 2px 5px 0 @purpleHeart-26;\n" +
    "  @shadow-button-purpleHeart-active:  0 0 2px 0 @purpleHeart-26, 0 4px 8px 0 @black-26;\n" +
    "  @shadow-button-shamrock:            0 0 3px 0 @shamrock-12, 0 2px 5px 0 @shamrock-26;\n" +
    "  @shadow-button-shamrock-active:     0 0 2px 0 @shamrock-26, 0 4px 8px 0 @black-26;\n" +
    "  @shadow-button-ceruleanBlue:        0 0 2px 0 @ceruleanBlue-12, 0 2px 5px 0 @ceruleanBlue-26;\n" +
    "  @shadow-button-ceruleanBlue-active: 0 0 2px 0 @ceruleanBlue-26, 0 4px 8px 0 @black-26;\n" +
    "\n" +
    "//== Typography\n" +
    "  @font-family-base:      'Avenir Next W01', 'Nunito Sans', sans-serif;\n" +
    "  @font-size-base:        16px;\n" +
    "  @font-size-display-5:   (@font-size-base * 6.5); // ~104px\n" +
    "  @font-size-display-4:   (@font-size-base * 4.5); // ~72px\n" +
    "  @font-size-display-3:   (@font-size-base * 3.5); // ~56px\n" +
    "  @font-size-display-2:   ceil(@font-size-base * 2.8); // ~45px\n" +
    "  @font-size-display-1:   ceil(@font-size-base * 2.1); // ~34px\n" +
    "  @font-size-headline:    (@font-size-base + 8); // ~24px\n" +
    "  @font-size-title:       (@font-size-base + 4); // ~20px\n" +
    "  @font-size-subhead:     (@font-size-base + 2); // ~18px\n" +
    "  @font-size-body-1:      (@font-size-base - 2); // ~14px\n" +
    "  @font-size-caption:     (@font-size-base - 4); // ~12px\n" +
    "\n" +
    "//== Borders\n" +
    "  @border-radius-base:    4px;\n" +
    "  @border-radius-sm:      2px;\n" +
    "\n" +
    "//== Media queries breakpoints\n" +
    "  @xs:                    ~'(max-width: 599px)';\n" +
    "  @gt-xs:                 ~'(min-width: 600px)';\n" +
    "  @lt-md:                 ~'(max-width: 959px)';\n" +
    "  @gt-sm:                 ~'(min-width: 960px)';\n" +
    "\n" +
    "\n" +
    "//== Bezier Curves\n" +
    "  // Based on Material Design easing curves\n" +
    "  // When something exists on screen already and moves to another position on screen, 40% out of first frame and 80% into second frame:\n" +
    "  @curveMove:                   cubic-bezier(0.4, 0, 0.2, 1);\n" +
    "  // When something comes from offscreen it has 0% out of the first frame and 80% in on the second frame:\n" +
    "  @curveEnter:                  cubic-bezier(0, 0, 0.2, 1);\n" +
    "  // When something leaves the screen it has 40% out of the first frame and 0% in on the second frame:\n" +
    "  @curveExit:                   cubic-bezier(0.4, 0, 1, 1);\n" +
    "\n"
  );

}]);
