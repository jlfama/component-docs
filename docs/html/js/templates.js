angular.module('Picatic.Components').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/avatar.html',
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/badge.html',
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content demo-content-flex-col\" ng-include=\"markupUrl3\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/card.html',
    "<section class=\"docs-content-section\">\n" +
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
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
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Single-line list</h2>\n" +
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n" +
    "\n" +
    "<section class=\"docs-content-section\">\n" +
    "  <h2>Two-line list</h2>\n" +
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
    "      </demo-tab>\n" +
    "    </demo-tabs>\n" +
    "\n" +
    "    <div class=\"demo-content\" ng-include=\"markupUrl2\"></div><!-- /.demo-content -->\n" +
    "  </demo-container>\n" +
    "</section><!-- /.docs-content-section -->\n"
  );


  $templateCache.put('app/views/menu.html',
    ""
  );


  $templateCache.put('app/views/snackbar.html',
    ""
  );


  $templateCache.put('app/views/table.html',
    ""
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
    "      <demo-tab dt-heading=\"CSS\">\n" +
    "        <hljs class=\"no-header\" lang=\"css\" code=\"css\" should-interpolate=\"false\"></hljs>\n" +
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
    "      <p class=\"pt-body-3\">Medium 18</p>\n" +
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
    "      <p class=\"pt-body-3 pt-inverse\">Medium 18</p>\n" +
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
    "<div>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised pt-heart-theme pt-button-lg pt-button-block\">Large</button>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised pt-heart-theme pt-button-block\">Medium</a>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised pt-heart-theme pt-button-sm pt-button-block\">Small</a>\n" +
    "</div>\n" +
    "<div>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised pt-shamrock-theme pt-button-lg pt-button-block\">Large</a>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised pt-shamrock-theme pt-button-block\">Medium</button>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised pt-shamrock-theme pt-button-sm pt-button-block\">Small</a>\n" +
    "</div>\n" +
    "<div>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised pt-cerulean-theme pt-button-lg pt-button-block\">Large</button>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised pt-cerulean-theme pt-button-block\">Medium</a>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised pt-cerulean-theme pt-button-sm pt-button-block\">Small</a>\n" +
    "</div>\n"
  );


  $templateCache.put('components/button/button-3.tmpl.html',
    "<div>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised md-primary pt-shamrock-theme pt-button-lg pt-button-badge pt-button-block\">Large <span class=\"pt-badge pt-pill\">3</span></button>\n" +
    "</div>\n" +
    "<div>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised md-primary pt-shamrock-theme pt-button-badge pt-button-block\">Medium <span class=\"pt-badge pt-pill\">3</span></button>\n" +
    "</div>\n" +
    "<div>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised md-primary pt-shamrock-theme pt-button-sm pt-button-badge pt-button-block\">Small <span class=\"pt-badge pt-pill\">3</span></button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/button/button.tmpl.html',
    "<div>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised md-primary pt-heart-theme pt-button-lg pt-button-block\">Large</button>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised md-primary pt-heart-theme pt-button-block\">Medium</a>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised md-primary pt-heart-theme pt-button-sm pt-button-block\">Small</a>\n" +
    "</div>\n" +
    "<div>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised md-primary pt-shamrock-theme pt-button-lg pt-button-block\">Large</button>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised md-primary pt-shamrock-theme pt-button-block\">Medium</a>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised md-primary pt-shamrock-theme pt-button-sm pt-button-block\">Small</a>\n" +
    "</div>\n" +
    "<div>\n" +
    "  <button type=\"button\" class=\"pt-button md-raised md-primary pt-cerulean-theme pt-button-lg pt-button-block\">Large</button>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised md-primary pt-cerulean-theme pt-button-block\">Medium</a>\n" +
    "  <a href=\"#\" class=\"pt-button md-raised md-primary pt-cerulean-theme pt-button-sm pt-button-block\">Small</a>\n" +
    "</div>\n"
  );


  $templateCache.put('components/card/card.tmpl.html',
    "<div class=\"layout-row\">\n" +
    "  <div class=\"layout-column flex-50\">\n" +
    "    <pt-card>\n" +
    "      <img class=\"pt-card-image\" alt=\"Alt Text\" src=\"https://s3.amazonaws.com/files.picatic.com/users/41382/c2d47174-abb0-4d89-96ca-a59acda0978c\" />\n" +
    "      <pt-card-title>\n" +
    "        <pt-card-title-text>\n" +
    "          <span class=\"pt-headline\">Headline</span>\n" +
    "          <span class=\"pt-subhead\">Subhead</span>\n" +
    "        </pt-card-title-text>\n" +
    "      </pt-card-title>\n" +
    "      <pt-card-content>\n" +
    "        <p>This is some content.</p>\n" +
    "      </pt-card-content>\n" +
    "      <pt-card-actions class=\"layout-align-end-center layout-row\">\n" +
    "        <button class=\"pt-button md-raised pt-cerulean-theme\">Cancel</button>\n" +
    "        <button class=\"pt-button md-raised pt-cerulean-theme md-primary\">Submit</button>\n" +
    "      </pt-card-actions>\n" +
    "    </pt-card>\n" +
    "  </div><!-- /.layout-column flex-50 -->\n" +
    "\n" +
    "  <div class=\"layout-column flex-50\">\n" +
    "    <pt-card class=\"pt-card-host\">\n" +
    "      <img class=\"pt-card-image\" alt=\"Alt Text\" src=\"https://s3.amazonaws.com/files.picatic.com/users/41382/c2d47174-abb0-4d89-96ca-a59acda0978c\" />\n" +
    "      <pt-card-title>\n" +
    "        <pt-card-title-text>\n" +
    "          <span class=\"pt-headline\">Nike Golf</span>\n" +
    "        </pt-card-title-text>\n" +
    "      </pt-card-title>\n" +
    "      <pt-card-content>\n" +
    "        <p class=\"pt-body-2\">Home of the most innovative golf products and the best athletes.</p>\n" +
    "      </pt-card-content>\n" +
    "      <pt-card-actions class=\"layout-align-end-center layout-row\">\n" +
    "        <div class=\"flex-50\">\n" +
    "          <button class=\"pt-button md-raised pt-cerulean-theme md-primary pt-button-block\">Ask A Question</button>\n" +
    "        </div><!-- /.flex-50 -->\n" +
    "        <div class=\"flex-50\">\n" +
    "          <button class=\"pt-button md-raised pt-cerulean-theme pt-button-block\">View Profile</button>\n" +
    "        </div><!-- /.flex-50 -->\n" +
    "      </pt-card-actions>\n" +
    "    </pt-card>\n" +
    "  </div><!-- /.layout-column flex-50 -->\n" +
    "</div><!-- /.layout-row -->\n"
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
    "  // Themes\n" +
    "  &.pt-heart-theme {\n" +
    "    color: @purpleHeart;\n" +
    "\n" +
    "    &.md-primary {\n" +
    "      background-color: @purpleHeart;\n" +
    "      color: #fff;\n" +
    "      box-shadow: @shadow-button-purpleHeart;\n" +
    "\n" +
    "      &:hover {\n" +
    "        background-color: @purpleHeart-700;\n" +
    "      }\n" +
    "      &:active {\n" +
    "        box-shadow: @shadow-button-purpleHeart-active;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  &.pt-cerulean-theme {\n" +
    "    color: @ceruleanBlue;\n" +
    "\n" +
    "    &.md-primary {\n" +
    "      background-color: @ceruleanBlue;\n" +
    "      color: #fff;\n" +
    "      box-shadow: @shadow-button-ceruleanBlue;\n" +
    "\n" +
    "      &:hover {\n" +
    "        background-color: @ceruleanBlue-700;\n" +
    "      }\n" +
    "      &:active {\n" +
    "        box-shadow: @shadow-button-ceruleanBlue-active;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "  &.pt-shamrock-theme {\n" +
    "    color: @shamrock;\n" +
    "\n" +
    "    &.md-primary {\n" +
    "      background-color: @shamrock;\n" +
    "      color: #fff;\n" +
    "      box-shadow: @shadow-button-shamrock;\n" +
    "\n" +
    "      &:hover {\n" +
    "        background-color: @shamrock-700;\n" +
    "      }\n" +
    "      &:active {\n" +
    "        box-shadow: @shadow-button-shamrock-active;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
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


  $templateCache.put('components/card/card.less',
    "@import (reference) \"../../style/variables.less\";\n" +
    "\n" +
    "pt-card {\n" +
    "  background-color: #fff;\n" +
    "  border-radius: @border-radius-base;\n" +
    "  box-shadow: @card-shadow;\n" +
    "  box-sizing: border-box;\n" +
    "  display: -webkit-box;\n" +
    "  display: -webkit-flex;\n" +
    "  display: flex;\n" +
    "  -webkit-box-orient: vertical;\n" +
    "  -webkit-flex-direction: column;\n" +
    "  flex-direction: column;\n" +
    "  margin: 8px;\n" +
    "}\n" +
    ".pt-card-image {\n" +
    "  border-radius: @border-radius-base @border-radius-base 0 0;\n" +
    "  box-sizing: border-box;\n" +
    "  display: -webkit-box;\n" +
    "  display: -webkit-flex;\n" +
    "  display: flex;\n" +
    "  -webkit-box-flex: 0;\n" +
    "  -webkit-flex: 0 0 auto;\n" +
    "  flex: 0 0 auto;\n" +
    "  height: auto;\n" +
    "  width: 100%;\n" +
    "}\n" +
    "pt-card-title {\n" +
    "  display: -webkit-box;\n" +
    "  display: -webkit-flex;\n" +
    "  display: flex;\n" +
    "  -webkit-box-flex: 1;\n" +
    "  -webkit-flex: 1 1 auto;\n" +
    "  flex: 1 1 auto;\n" +
    "  -webkit-box-orient: horizontal;\n" +
    "  -webkit-box-direction: normal;\n" +
    "  -webkit-flex-direction: row;\n" +
    "  flex-direction: row;\n" +
    "  padding: 24px;\n" +
    "}\n" +
    "pt-card-title-text {\n" +
    "  -webkit-box-flex: 1;\n" +
    "  -webkit-flex: 1;\n" +
    "  flex: 1;\n" +
    "  -webkit-box-orient: vertical;\n" +
    "  -webkit-box-direction: normal;\n" +
    "  -webkit-flex-direction: column;\n" +
    "  flex-direction: column;\n" +
    "  display: -webkit-box;\n" +
    "  display: -webkit-flex;\n" +
    "  display: flex;\n" +
    "}\n" +
    "pt-card-content {\n" +
    "  display: block;\n" +
    "  padding: 24px;\n" +
    "\n" +
    "  pt-card-title + & {\n" +
    "    padding-top: 0;\n" +
    "  }\n" +
    "  & > p:first-child {\n" +
    "    margin-top: 0;\n" +
    "  }\n" +
    "  & > p:last-child {\n" +
    "    margin-bottom: 0;\n" +
    "  }\n" +
    "}\n" +
    "pt-card-actions {\n" +
    "  padding: 24px;\n" +
    "\n" +
    "  &:not(.layout-column) {\n" +
    "    .pt-button {\n" +
    "      margin: 0 4px;\n" +
    "\n" +
    "      &:first-of-type {\n" +
    "        margin-left: 0;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    ".pt-card-host {\n" +
    "\n" +
    "  pt-card-title,\n" +
    "  pt-card-content,\n" +
    "  pt-card-actions {\n" +
    "    background-color: rgba(0,0,0,.03);\n" +
    "  }\n" +
    "  .pt-card-image {\n" +
    "    border-radius: 0;\n" +
    "    margin: 40px;\n" +
    "    width: calc(~'100% - 80px');\n" +
    "  }\n" +
    "  pt-card-title {\n" +
    "    padding-bottom: 4px;\n" +
    "  }\n" +
    "  pt-card-content {\n" +
    "    padding-bottom: 0;\n" +
    "\n" +
    "    * {\n" +
    "      color: @black-54;\n" +
    "    }\n" +
    "  }\n" +
    "  pt-card-actions {\n" +
    "    .flex-50 {\n" +
    "      &:first-child {\n" +
    "        margin-right: 8px;\n" +
    "      }\n" +
    "      .pt-button-block {\n" +
    "        width: 100%;\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "}\n"
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


  $templateCache.put('style/layout/layout.less',
    ".layout-column>.flex {\n" +
    "  min-height: 0;\n" +
    "}\n" +
    ".layout-column,.layout-row {\n" +
    "  box-sizing: border-box;\n" +
    "  display: -webkit-box;\n" +
    "  display: -webkit-flex;\n" +
    "  display: flex;\n" +
    "}\n" +
    ".layout-column {\n" +
    "  -webkit-box-direction: normal;\n" +
    "  -webkit-box-orient: vertical;\n" +
    "  -webkit-flex-direction: column;\n" +
    "  flex-direction: column;\n" +
    "}\n" +
    ".layout-row {\n" +
    "  -webkit-box-direction: normal;\n" +
    "  -webkit-box-orient: horizontal;\n" +
    "  -webkit-flex-direction: row;\n" +
    "  flex-direction: row\n" +
    "}\n" +
    "\n" +
    ".layout-align-center {\n" +
    "  -webkit-box-pack: center;\n" +
    "  -webkit-justify-content: center;\n" +
    "  justify-content: center;\n" +
    "}\n" +
    ".layout-align-center-center {\n" +
    "  -webkit-box-pack: center;\n" +
    "  -webkit-justify-content: center;\n" +
    "  justify-content: center;\n" +
    "  -webkit-box-align: center;\n" +
    "  -webkit-align-items: center;\n" +
    "  align-items: center;\n" +
    "  -webkit-align-content: center;\n" +
    "  align-content: center;\n" +
    "  max-width: 100%;\n" +
    "\n" +
    "  & > * {\n" +
    "    max-width: 100%;\n" +
    "    box-sizing: border-box;\n" +
    "  }\n" +
    "}\n" +
    ".layout-align-center-end {\n" +
    "  -webkit-box-pack: center;\n" +
    "  -webkit-justify-content: center;\n" +
    "  justify-content: center;\n" +
    "  -webkit-box-align: end;\n" +
    "  -webkit-align-items: flex-end;\n" +
    "  align-items: flex-end;\n" +
    "  -webkit-align-content: flex-end;\n" +
    "  align-content: flex-end;\n" +
    "}\n" +
    ".layout-align-center-start {\n" +
    "  -webkit-box-pack: center;\n" +
    "  -webkit-justify-content: center;\n" +
    "  justify-content: center;\n" +
    "  -webkit-box-align: start;\n" +
    "  -webkit-align-items: flex-start;\n" +
    "  align-items: flex-start;\n" +
    "  -webkit-align-content: flex-start;\n" +
    "  align-content: flex-start;\n" +
    "}\n" +
    ".layout-align-center-stretch {\n" +
    "  -webkit-box-pack: center;\n" +
    "  -webkit-justify-content: center;\n" +
    "  justify-content: center;\n" +
    "  -webkit-box-align: stretch;\n" +
    "  -webkit-align-items: stretch;\n" +
    "  align-items: stretch;\n" +
    "  -webkit-align-content: stretch;\n" +
    "  align-content: stretch;\n" +
    "}\n" +
    "\n" +
    ".layout-align-end {\n" +
    "  -webkit-box-pack: end;\n" +
    "  -webkit-justify-content: flex-end;\n" +
    "  justify-content: flex-end;\n" +
    "}\n" +
    ".layout-align-end-center {\n" +
    "  -webkit-box-pack: end;\n" +
    "  -webkit-justify-content: flex-end;\n" +
    "  justify-content: flex-end;\n" +
    "  -webkit-box-align: center;\n" +
    "  -webkit-align-items: center;\n" +
    "  align-items: center;\n" +
    "  -webkit-align-content: center;\n" +
    "  align-content: center;\n" +
    "  max-width: 100%;\n" +
    "\n" +
    "  & > * {\n" +
    "    max-width: 100%;\n" +
    "    box-sizing: border-box;\n" +
    "  }\n" +
    "}\n" +
    ".layout-align-end-end {\n" +
    "  -webkit-box-pack: end;\n" +
    "  -webkit-justify-content: flex-end;\n" +
    "  justify-content: flex-end;\n" +
    "  -webkit-box-align: end;\n" +
    "  -webkit-align-items: flex-end;\n" +
    "  align-items: flex-end;\n" +
    "  -webkit-align-content: flex-end;\n" +
    "  align-content: flex-end;\n" +
    "}\n" +
    ".layout-align-end-start {\n" +
    "  -webkit-box-pack: end;\n" +
    "  -webkit-justify-content: flex-end;\n" +
    "  justify-content: flex-end;\n" +
    "  -webkit-box-align: start;\n" +
    "  -webkit-align-items: flex-start;\n" +
    "  align-items: flex-start;\n" +
    "  -webkit-align-content: flex-start;\n" +
    "  align-content: flex-start;\n" +
    "}\n" +
    ".layout-align-end-stretch {\n" +
    "  -webkit-box-pack: end;\n" +
    "  -webkit-justify-content: flex-end;\n" +
    "  justify-content: flex-end;\n" +
    "  -webkit-box-align: stretch;\n" +
    "  -webkit-align-items: stretch;\n" +
    "  align-items: stretch;\n" +
    "  -webkit-align-content: stretch;\n" +
    "  align-content: stretch;\n" +
    "}\n" +
    "\n" +
    ".layout-align-space-around {\n" +
    "  -webkit-justify-content: space-around;\n" +
    "  justify-content: space-around;\n" +
    "}\n" +
    ".layout-align-space-around-center {\n" +
    "  -webkit-justify-content: space-around;\n" +
    "  justify-content: space-around;\n" +
    "  -webkit-box-align: center;\n" +
    "  -webkit-align-items: center;\n" +
    "  align-items: center;\n" +
    "  -webkit-align-content: center;\n" +
    "  align-content: center;\n" +
    "  max-width: 100%;\n" +
    "\n" +
    "  & > * {\n" +
    "    max-width: 100%;\n" +
    "    box-sizing: border-box;\n" +
    "  }\n" +
    "}\n" +
    ".layout-align-space-around-end {\n" +
    "  -webkit-justify-content: space-around;\n" +
    "  justify-content: space-around;\n" +
    "  -webkit-box-align: end;\n" +
    "  -webkit-align-items: flex-end;\n" +
    "  align-items: flex-end;\n" +
    "  -webkit-align-content: flex-end;\n" +
    "  align-content: flex-end;\n" +
    "}\n" +
    ".layout-align-space-around-start {\n" +
    "  -webkit-justify-content: space-around;\n" +
    "  justify-content: space-around;\n" +
    "  -webkit-box-align: start;\n" +
    "  -webkit-align-items: flex-start;\n" +
    "  align-items: flex-start;\n" +
    "  -webkit-align-content: flex-start;\n" +
    "  align-content: flex-start;\n" +
    "}\n" +
    ".layout-align-space-around-stretch {\n" +
    "  -webkit-justify-content: space-around;\n" +
    "  justify-content: space-around;\n" +
    "  -webkit-box-align: stretch;\n" +
    "  -webkit-align-items: stretch;\n" +
    "  align-items: stretch;\n" +
    "  -webkit-align-content: stretch;\n" +
    "  align-content: stretch;\n" +
    "}\n" +
    "\n" +
    ".layout-align-space-between {\n" +
    "  -webkit-box-pack: justify;\n" +
    "  -webkit-justify-content: space-between;\n" +
    "  justify-content: space-between;\n" +
    "}\n" +
    ".layout-align-space-between-center {\n" +
    "  -webkit-box-pack: justify;\n" +
    "  -webkit-justify-content: space-between;\n" +
    "  justify-content: space-between;\n" +
    "  -webkit-box-align: center;\n" +
    "  -webkit-align-items: center;\n" +
    "  align-items: center;\n" +
    "  -webkit-align-content: center;\n" +
    "  align-content: center;\n" +
    "  max-width: 100%;\n" +
    "\n" +
    "  & > * {\n" +
    "    max-width: 100%;\n" +
    "    box-sizing: border-box;\n" +
    "  }\n" +
    "}\n" +
    ".layout-align-space-between-end {\n" +
    "  -webkit-box-pack: justify;\n" +
    "  -webkit-justify-content: space-between;\n" +
    "  justify-content: space-between;\n" +
    "  -webkit-box-align: end;\n" +
    "  -webkit-align-items: flex-end;\n" +
    "  align-items: flex-end;\n" +
    "  -webkit-align-content: flex-end;\n" +
    "  align-content: flex-end;\n" +
    "}\n" +
    ".layout-align-space-between-start {\n" +
    "  -webkit-box-pack: justify;\n" +
    "  -webkit-justify-content: space-between;\n" +
    "  justify-content: space-between;\n" +
    "  -webkit-box-align: start;\n" +
    "  -webkit-align-items: flex-start;\n" +
    "  align-items: flex-start;\n" +
    "  -webkit-align-content: flex-start;\n" +
    "  align-content: flex-start;\n" +
    "}\n" +
    ".layout-align-space-between-stretch {\n" +
    "  -webkit-box-pack: justify;\n" +
    "  -webkit-justify-content: space-between;\n" +
    "  justify-content: space-between;\n" +
    "  -webkit-box-align: stretch;\n" +
    "  -webkit-align-items: stretch;\n" +
    "  align-items: stretch;\n" +
    "  -webkit-align-content: stretch;\n" +
    "  align-content: stretch;\n" +
    "}\n" +
    "\n" +
    "\n" +
    ".layout-align-start-start {\n" +
    "  -webkit-box-align: start;\n" +
    "  -webkit-align-items: flex-start;\n" +
    "  align-items: flex-start;\n" +
    "  -webkit-align-content: flex-start;\n" +
    "  align-content: flex-start;\n" +
    "}\n" +
    ".layout-align-start-center {\n" +
    "  -webkit-box-align: center;\n" +
    "  -webkit-align-items: center;\n" +
    "  align-items: center;\n" +
    "  -webkit-align-content: center;\n" +
    "  align-content: center;\n" +
    "  max-width: 100%;\n" +
    "\n" +
    "  & > * {\n" +
    "    max-width: 100%;\n" +
    "    box-sizing: border-box;\n" +
    "  }\n" +
    "}\n" +
    ".layout-align-start-end {\n" +
    "  -webkit-box-align: end;\n" +
    "  -webkit-align-items: flex-end;\n" +
    "  align-items: flex-end;\n" +
    "  -webkit-align-content: flex-end;\n" +
    "  align-content: flex-end;\n" +
    "}\n" +
    ".layout-align-start-stretch {\n" +
    "  -webkit-box-align: stretch;\n" +
    "  -webkit-align-items: stretch;\n" +
    "  align-items: stretch;\n" +
    "  -webkit-align-content: stretch;\n" +
    "  align-content: stretch;\n" +
    "}\n" +
    "\n" +
    ".flex {\n" +
    "  -webkit-box-flex: 1;\n" +
    "  -webkit-flex: 1;\n" +
    "  box-sizing: border-box;\n" +
    "  flex: 1;\n" +
    "}\n" +
    ".flex-grow {\n" +
    "  -webkit-box-flex: 1;\n" +
    "  -webkit-flex: 1 1 100%;\n" +
    "  box-sizing: border-box;\n" +
    "  flex: 1 1 100%;\n" +
    "}\n" +
    ".flex-initial {\n" +
    "  -webkit-box-flex: 0;\n" +
    "  -webkit-flex: 0 1 auto;\n" +
    "  flex: 0 1 auto;\n" +
    "  box-sizing: border-box;\n" +
    "}\n" +
    ".flex-auto {\n" +
    "  -webkit-box-flex: 1;\n" +
    "  -webkit-flex: 1 1 auto;\n" +
    "  flex: 1 1 auto;\n" +
    "  box-sizing: border-box;\n" +
    "}\n" +
    ".flex-none {\n" +
    "  -webkit-box-flex: 0;\n" +
    "  -webkit-flex: 0 0 auto;\n" +
    "  flex: 0 0 auto;\n" +
    "  box-sizing: border-box;\n" +
    "}\n" +
    ".flex-noshrink {\n" +
    "  -webkit-box-flex: 1;\n" +
    "  -webkit-flex: 1 0 auto;\n" +
    "  flex: 1 0 auto;\n" +
    "  box-sizing: border-box;\n" +
    "}\n" +
    ".flex-nogrow {\n" +
    "  -webkit-box-flex: 0;\n" +
    "  -webkit-flex: 0 1 auto;\n" +
    "  flex: 0 1 auto;\n" +
    "  box-sizing: border-box;\n" +
    "}\n" +
    ".flex-50 {\n" +
    "  -webkit-box-flex: 1;\n" +
    "  -webkit-flex: 1 1 100%;\n" +
    "  flex: 1 1 100%;\n" +
    "  box-sizing: border-box;\n" +
    "  max-width: 50%;\n" +
    "  max-height: 100%;\n" +
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
    "  @purpleHeart-400:       #7e57c2;\n" +
    "  @purpleHeart-700:       #512da8;\n" +
    "  @purpleHeart-12:        rgba(103,58,183,.12);\n" +
    "  @purpleHeart-26:        rgba(103,58,183,.26);\n" +
    "\n" +
    "  @ceruleanBlue:          rgb(63,81,181); // #3f51b5\n" +
    "  @ceruleanBlue-400:      #5c6bc0;\n" +
    "  @ceruleanBlue-700:      #303f9f;\n" +
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
    "  // Extra small screen / phone\n" +
    "  @screen-xs:             480px;\n" +
    "  @screen-phone:          @screen-xs;\n" +
    "\n" +
    "  // Small screen / tablet\n" +
    "  @screen-sm:             768px;\n" +
    "  @screen-tablet:         @screen-sm;\n" +
    "\n" +
    "  // Medium screen / desktop\n" +
    "  @screen-md:             992px;\n" +
    "  @screen-desktop:        @screen-md;\n" +
    "\n" +
    "  // Large screen / wide desktop\n" +
    "  @screen-lg:             1200px;\n" +
    "  @screen-lg-desktop:     @screen-lg;\n" +
    "\n" +
    "  // So media queries don't overlap when required, provide a maximum\n" +
    "  @screen-xs-max:              (@screen-sm - 1);\n" +
    "  @screen-sm-max:              (@screen-md - 1);\n" +
    "  @screen-md-max:              (@screen-lg - 1);\n" +
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
