  // script.js
  // create the module and name it scotchApp
  // also include ngRoute for all our routing needs
  var app = angular.module('awfir', ['ngRoute', 'angular-owl-carousel-2', 'pascalprecht.translate']);
  
    // configure our routes
    app.config(function($routeProvider, $translateProvider) {
       $routeProvider
          // route for the home page
          // .when('/', {
          //    templateUrl: 'pages/dashboard.html',
          //    controller: 'dashboard-Controller'
          // })
          .when('/', {
             templateUrl: 'pages/home.html',
             controller: 'home-Controller'
          })
          .when('/login', {
             templateUrl: 'pages/login.html',
             controller: 'login-Controller'
          })
          .when('/demo', {
             templateUrl: 'pages/demo.html',
             controller: 'demo-Controller'
          })
          .when('/signup', {
             templateUrl: 'pages/signup.html',
             controller: 'signup-Controller'
          })
          .when('/home', {
             templateUrl: 'pages/home.html',
             controller: 'home-Controller'
          })
          .when('/product-list', {
             templateUrl: 'pages/product-list.html',
             controller: 'productlist-Controller'
          })
          .when('/product-details', {
             templateUrl: 'pages/product-details.html',
             controller: 'productdetails-Controller'
          })
          .when('/cartpayment', {
             templateUrl: 'cartpayment.html',
             controller: 'cartpayment-Controller'
          });
       //========================================================// 
       $translateProvider.translations('en', {
             lbl_signup: 'Sign Up',
             lbl_login: 'Log In',
             lbl_Cart: 'Cart',
             lbl_search_placeholder: 'Search Local Deals',
             head_login_title: 'You Must Login to grab that Awesome Deal!',
             lbl_email_address: 'Email address',
             lbl_pass: 'Password',
             lbl_fotgot_pass: 'Forgot?',
             btntxt_login: 'Log In to Checkout',
             lbl_create_ac_txt: "Don't have an account?",
             lbl_create_ac: 'Create One',
             btn_login_google: ' Login with Google ',
             btn_login_facebook: ' Login with Facebook ',
             lbl_Myprofile: 'My Profile',
             lbl_home: 'Home',
             lbl_goods: 'Goods',
             lbl_services: 'Services',
             lbl_dining_out: 'Dining Out',
             lbl_spa_and_salon: "Spa & Salon",
             lbl_daily_deals: "Daily Deals",
             lbl_brand_offers: "Brand Offers",
             lbl_hotdeal: 'Hot Deals',
             lbl_mob_laptop: 'Mobile & Laptops',
             lbl_Awfir: 'Awfir',
             lbl_select_your_city: 'select your city',
             lbl_logout: 'Logout',
             lbl_about_us: 'About us',
             lbl_about_awfir: 'About Awfir',
  
             lbl_terms_and_conditions: 'Terms & Conditions',
             lbl_blog: 'Blog',
             lbl_faq: 'FAQ',
             lbl_help: 'Help',
             lbl_how_to_reedem: 'How to Reedem',
             lbl_contact_us: 'Contact us',
             lbl_Refund_policies: 'Refund policies',
             lbl_why_us: 'Why us',
             lbl_grow_your_bussiness: 'Grow Your Bussiness by working  with us',
             lbl_vendor: 'Vendor',
             lbl_send_us_your_inquire: 'Send us your inquire',
             lbl_general_enquiries: 'General Enquiries',
             lbl_vendor_support: 'Vendor Support',
             lbl_get_latest_deals_in_your_mail_box: 'Get latest deals in your mail box',
             lbl_subscribe: 'Subscribe',
             lbl_email: "Email",
             lbl_stay_connected_with_us: "Stay connected with us",
             lbl_copyright: "Copyright",
             lbl_electronics: "Electronics",
             lbl_view_deals_on_map: "View Deals On Map",
             lbl_location: 'Location',
             lbl_view_more_deals: 'View More Deals',
             lbl_for_the_home: 'For the Home',
             lbl_discount: 'Discount',
             lbl_price: 'Price',
             lbl_special_offers: 'Special offers',
             lbl_reviews: 'Reviews',
             lbl_get_direction: 'Get Direction',
             lbl_over: 'Over',
             lbl_deals_sold: 'Deals Sold',
             lbl_qty: 'Qty',
             lbl_add_to_cart: 'Add To cart',
             lbl_send_as_gift: 'Send as Gift',
             lbl_bought: 'Bought',
             lbl_off: 'Off',
             lbl_details: 'Details',
             lbl_fineprint: 'Fineprint',
             lbl_view_all_reviews: 'View All Reviews',
             lbl_recently_added_deals: 'RECENTLY ADDED DEALS',
             lbl_gift_details: 'Gift Details',
             lbl_recommended_deals: 'Recommended Deals',
             lbl_trending_deals: 'TRENDING DEALS',
             lbl_name: 'Name',
             lbl_recipient_email: "Recipient Email",
             lbl_customize_your_message: "Customize Your Message",
             lbl_when_send_gift: "When Would you like to send your gift?",
             lbl_total: "Total",
             lbl_save: "SAVE",
             lbl_customer_review: "Customer Review",
             lbl_review_order: "Review Order",
             lbl_delete: 'Delete',
             lbl_savings: 'Savings',
             lbl_apply: 'Apply',
             lbl_order: "Order",
             lbl_confirm: "Confirm",
             lbl_terms_and_condition_agree: "By clicking â€œConfirm Orderâ€ I accept the current Terms of Use, Refund Policy and Privacy Statement.",
             lbl_payment: 'Payment',
             lbl_net_banking: 'Net Banking',
             lbl_credit: 'Credit',
             lbl_debit: 'Debit',
             lbl_atm_card: 'ATM Card',
             lbl_enter_card_number: 'Enter Card Number',
             lbl_expiry: 'Expiry',
             lbl_pay: 'Pay',
             lbl_k_net_payment_gateway: 'K-Net Payment Gateway',
             lbl_place: 'Place',
             lbl_login_with_google: 'Login with Google',
             lbl_login_with_facebook: 'Login with Facebook',
             lbl_first_name: "First Name",
             lbl_last_name: "Last Name",
             lbl_profile_image: "Profile Image",
             lbl_change: "Change",
             lbl_select_file_to_upload: "Select file to upload",
             lbl_email_address: 'Email address',
             lbl_password: 'Password',
             lbl_confirm_password: 'Confirm Password',
             lbl_gender: "Gender",
             lbl_date_of_birth: "Date of Birth",
             lbl_location: "Location",
             lbl_interested_category: "Interested Category",
             lbl_existing_user: "Existing User?",
             lbl_my_purchase: "My Purchase",
             lbl_my_account: "My Account",
             lbl_my_favorites: "My Favorites",
             lbl_notification: "Notification",
             lbl_deal: "Deal",
             lbl_purchased: "Purchased",
             lbl_product: "Product",
             lbl_amount: "Amount",
             lbl_deal_yet_to_be_redeemed: "Deal Yet to Be Redeemed",
             lbl_id: "ID",
             lbl_review_deal: "Review Deal",
             lbl_cancel: 'Cancel',
             lbl_change_password: 'Change Password',
             lbl_new_password: 'New Password',
             lbl_old_password: 'Old Password',
             lbl_account: 'Account',
             lbl_sold_by: 'Sold By',
             lbl_about_us_desc: 'Awfir is building the daily habit in local commerce, offering a vast mobile and online marketplace where people discover and save on amazing things to do, see, eat and buy. By enabling real-time commerce across local businesses, travel destinations, consumer products and live events, shoppers can find the best a city has to offer. ',
             lbl_enter_code: 'enter code',
             lbl_forget_password: 'Fotgot password',
             lbl_reset_my_password: 'Reset my password',
             /*Login page*/
             /*End Login page*/
          })
          .translations('ar', {
            lbl_deal: "ØµÙÙ‚Ø©",
            lbl_purchased: "Ø§Ø´ØªØ±Ù‰",
            lbl_product: "Ø§Ù„Ù…Ù†ØªØ¬",
            lbl_amount: "ÙƒÙ…ÙŠØ©",
            lbl_deal_yet_to_be_redeemed: "ØµÙÙ‚Ø© Ø­ØªÙ‰ Ø§Ù„Ø¢Ù† Ù„Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯",
            lbl_id: "Ù‡ÙˆÙŠØ© Ø´Ø®ØµÙŠØ©",
            lbl_review_deal: "Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„ØµÙÙ‚Ø©",
            lbl_cancel: 'Ø¥Ù„ØºØ§Ø¡',
            lbl_change_password: 'ØªØºÙŠÙŠØ± ÙƒÙ„Ù…Ø© Ø§Ù„Ø³Ø±',
            lbl_new_password: 'ÙƒÙ„Ù…Ø© Ø§Ù„Ø³Ø± Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©',
            lbl_old_password: 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ù‚Ø¯ÙŠÙ…Ø©',
            lbl_account: 'Ø§Ù„Ø­Ø³Ø§Ø¨',
            lbl_sold_by: 'ØªÙ… Ø¨ÙŠØ¹Ù‡Ø§ Ù…Ù† Ù‚Ø¨Ù„',
            lbl_about_us_desc: 'ØªÙ‚ÙˆÙ… Ø¹ÙˆÙÙŠØ± Ø¨Ø¨Ù†Ø§Ø¡ Ø§Ù„Ø¹Ø§Ø¯Ø© Ø§Ù„ÙŠÙˆÙ…ÙŠØ© ÙÙŠ Ø§Ù„ØªØ¬Ø§Ø±Ø© Ø§Ù„Ù…Ø­Ù„ÙŠØ©ØŒ ÙˆØªÙ‚Ø¯Ù… Ø³ÙˆÙ‚Ø§ Ù…ØªÙ†Ù‚Ù„Ø© ÙˆØ¹Ø¨Ø± Ø§Ù„Ø¥Ù†ØªØ±Ù†Øª Ø´Ø§Ø³Ø¹Ø© Ø­ÙŠØ« ÙŠÙƒØªØ´Ù Ø§Ù„Ù†Ø§Ø³ ÙˆÙŠÙˆÙØ±ÙˆÙ† Ø£Ø´ÙŠØ§Ø¡ Ù…Ø°Ù‡Ù„Ø© Ù„Ù„Ù‚ÙŠØ§Ù… Ø¨Ù‡Ø§ØŒ Ø§Ù†Ø¸Ø±ØŒ Ø£ÙƒÙ„ ÙˆØ´Ø±Ø§Ø¡. Ù…Ù† Ø®Ù„Ø§Ù„ ØªÙ…ÙƒÙŠÙ† Ø§Ù„ØªØ¬Ø§Ø±Ø© ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠ Ø¹Ø¨Ø± Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù…Ø­Ù„ÙŠØ©ØŒ ÙˆØ¬Ù‡Ø§Øª Ø§Ù„Ø³ÙØ±ØŒ ÙˆØ§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø§Ø³ØªÙ‡Ù„Ø§ÙƒÙŠØ© ÙˆØ§Ù„Ø£Ø­Ø¯Ø§Ø« Ø§Ù„Ø­ÙŠØ©ØŒ ÙŠÙ…ÙƒÙ† Ù„Ù„Ù…ØªØ³ÙˆÙ‚ÙŠÙ† Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø£ÙØ¶Ù„ Ù…Ø¯ÙŠÙ†Ø© Ù„Ù‡Ø°Ø§ Ø§Ù„Ø¹Ø±Ø¶.',
            lbl_enter_code: 'Ø§Ø¯Ø®Ù„ Ø§Ù„Ø±Ù…Ø²',
            lbl_forget_password: 'Ù‡Ù„ Ù†Ø³ÙŠØª ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
            lbl_reset_my_password: 'Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙŠÙŠÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø§Ù„Ø®Ø§ØµØ© Ø¨ÙŠ',
  
             lbl_signup: 'Ø³Ø¬Ù„',
             lbl_login: 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„',
             lbl_Cart: 'Ø¹Ø±Ø¨Ø© Ø§Ù„ØªØ³ÙˆÙ‚',
             lbl_search_placeholder: 'Ø§Ù„Ø¨Ø­Ø« ÙÙŠ Ø§Ù„Ø¹Ø±ÙˆØ¶ Ø§Ù„Ù…Ø­Ù„ÙŠØ©',
             head_login_title: 'ÙŠØ¬Ø¨ Ø¹Ù„ÙŠÙƒ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ù„Ù„Ø§Ø³ØªÙŠÙ„Ø§Ø¡ Ø¹Ù„Ù‰ Ø£Ù† Ø±Ù‡ÙŠØ¨Ø© ØµÙÙ‚Ø©!',
             lbl_email_address: 'Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ',
             lbl_pass: 'ÙƒÙ„Ù…Ù‡ Ø§Ù„Ø³Ø±',
             lbl_fotgot_pass: 'Ù‡Ù„ Ù†Ø³ÙŠØªØŸ',
             btntxt_login: 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ù„Ù„Ø®Ø±ÙˆØ¬',
             lbl_create_ac_txt: 'Ù„ÙŠØ³ Ù„Ø¯ÙŠÙƒ Ø­Ø³Ø§Ø¨ØŸ',
             lbl_create_ac: 'Ø§ØµÙ†Ø¹ ÙˆØ§Ø­Ø¯Ø§',
             btn_login_google: ' Ø³Ø¬Ù„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… ØºÙˆØºÙ„ ',
             btn_login_facebook: ' ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙÙŠØ³Ø¨ÙˆÙƒ ',
             lbl_Myprofile: 'Ù…Ù„ÙÙŠ',
             lbl_home: 'Ù…Ù†Ø²Ù„',
             lbl_goods: 'Ø§Ù„Ø¨Ø¶Ø§Ø¦Ø¹',
             lbl_services: 'Ø®Ø¯Ù…Ø§Øª',
             lbl_dining_out: 'ØªÙ†Ø§ÙˆÙ„ Ø§Ù„Ø·Ø¹Ø§Ù… Ø®Ø§Ø±Ø¬ Ø§Ù„Ù…Ù†Ø²Ù„',
             lbl_spa_and_salon: "Ø³Ø¨Ø§ & ØµØ§Ù„ÙˆÙ†",
             lbl_daily_deals: "Ø¹Ø±ÙˆØ¶ ÙŠÙˆÙ…ÙŠØ©",
             lbl_brand_offers: "Ø¹Ø±ÙˆØ¶ Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©",
             lbl_hotdeal: 'ØµÙÙ‚Ø§Øª Ø³Ø§Ø®Ù†Ø©',
             lbl_mob_laptop: 'Ù…ÙˆØ¨Ø§ÙŠÙ„ ÙˆØ£Ø¬Ù‡Ø²Ø© Ø§Ù„ÙƒÙ…Ø¨ÙŠÙˆØªØ± Ø§Ù„Ù…Ø­Ù…ÙˆÙ„Ø©',
             lbl_Awfir: 'Ø£ÙˆÙØ±',
             lbl_select_your_city: 'Ø­Ø¯Ø¯ Ù…Ø¯ÙŠÙ†ØªÙƒ',
             lbl_logout: 'Ø§Ù„Ø®Ø±ÙˆØ¬',
             lbl_about_us: 'Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¹Ù†Ø§',
             lbl_about_awfir: 'Ø¹Ù† Ø¹ÙˆÙÙŠØ±',
             lbl_terms_and_conditions: 'Ø§Ù„Ø¨Ù†ÙˆØ¯ Ùˆ Ø§Ù„Ø¸Ø±ÙˆÙ',
             lbl_blog: 'Ù…Ø¯ÙˆÙ†Ø©',
             lbl_faq: 'FAQ',
             lbl_help: 'Ù…Ø³Ø§Ø¹Ø¯Ø©',
             lbl_how_to_reedem: 'ÙƒÙŠÙÙŠØ© ØªØ®Ù„ÙŠØµ',
             lbl_contact_us: 'Ø§ØªØµÙ„ Ø¨Ù†Ø§',
             lbl_Refund_policies: 'Ø³ÙŠØ§Ø³Ø§Øª Ø±Ø¯ Ø§Ù„Ø£Ù…ÙˆØ§Ù„',
             lbl_why_us: 'Ù„Ù…Ø§Ø°Ø§ Ù†Ø­Ù†',
             lbl_grow_your_bussiness: 'ØªÙ†Ù…Ùˆ Ø¹Ù…Ù„Ùƒ Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ø¹Ù…Ù„ Ù…Ø¹Ù†Ø§',
             lbl_vendor: 'Ø¨Ø§Ø¦Ø¹',
             lbl_send_us_your_inquire: 'Ø£Ø±Ø³Ù„ Ù„Ù†Ø§ Ø§Ù„Ø§Ø³ØªÙØ³Ø§Ø± Ø§Ù„Ø®Ø§Øµ',
             lbl_general_enquiries: 'Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª Ø¹Ø§Ù…Ø©',
             lbl_vendor_support: 'Ø¯Ø¹Ù… Ø§Ù„Ø¨Ø§Ø¦Ø¹',
             lbl_get_latest_deals_in_your_mail_box: 'Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø£Ø­Ø¯Ø« Ø§Ù„ØµÙÙ‚Ø§Øª ÙÙŠ ØµÙ†Ø¯ÙˆÙ‚ Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ',
             lbl_subscribe: 'Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ',
             lbl_email: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
             lbl_stay_connected_with_us: "Ø§Ø¨Ù‚ Ø¹Ù„Ù‰ Ø§ØªØµØ§Ù„ Ù…Ø¹Ù†Ø§",
             lbl_copyright: "Ø­Ù‚ÙˆÙ‚ Ø§Ù„Ù†Ø´Ø±",
             lbl_electronics: "Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ§Øª",
             lbl_view_deals_on_map: "Ø¹Ø±Ø¶ Ø¹Ø±ÙˆØ¶ Ø¹Ù„Ù‰ Ø§Ù„Ø®Ø±ÙŠØ·Ø©",
             lbl_location: 'Ù…ÙˆÙ‚Ø¹',
             lbl_view_more_deals: 'Ø¹Ø±Ø¶ Ø§Ù„Ù…Ø²ÙŠØ¯ Ù…Ù† Ø§Ù„Ø¹Ø±ÙˆØ¶',
             lbl_for_the_home: 'Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„ÙˆØ·Ù†',
             lbl_discount: 'Ø®ØµÙ…',
             lbl_price: 'Ø§Ù„Ø³Ø¹Ø±',
             lbl_special_offers: 'Ø¹Ø±ÙˆØ¶ Ø®Ø§ØµØ©',
             lbl_reviews: 'Ø§Ø³ØªØ¹Ø±Ø§Ø¶',
             lbl_get_direction: 'Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ø§ØªØ¬Ø§Ù‡',
             lbl_over: 'Ø¹Ù„Ù‰',
             lbl_deals_sold: 'ØµÙÙ‚Ø§Øª ØªØ¨Ø§Ø¹',
             lbl_qty: 'ÙƒÙ…ÙŠØ©',
             lbl_add_to_cart: 'Ø£Ø¶Ù Ø¥Ù„Ù‰ Ø§Ù„Ø³Ù„Ø©',
             lbl_send_as_gift: 'Ø§Ø±Ø³Ù„Ù‡Ø§ ÙƒÙ‡Ø¯ÙŠÙ‡',
             lbl_bought: 'Ø§Ø´ØªØ±Ù‰',
             lbl_off: 'Ø¥ÙŠÙ‚Ø§Ù',
             lbl_details: 'ØªÙØ§ØµÙŠÙ„',
             lbl_fineprint: 'Ø§Ù„Ø·Ø¨Ø§Ø¹Ø© Ø·Ø¨Ø§Ø¹Ø©',
             lbl_view_all_reviews: 'Ø¹Ø±Ø¶ Ø¬Ù…ÙŠØ¹ Ø§Ù„ØªØ¹Ù„ÙŠÙ‚Ø§Øª',
             lbl_recently_added_deals: 'Ø§Ù„ØµÙÙ‚Ø§Øª Ø§Ù„Ù…Ø¶Ø§ÙØ© Ù…Ø¤Ø®Ø±Ø§',
             lbl_gift_details: 'ØªÙØ§ØµÙŠÙ„ Ù‡Ø¯ÙŠØ©',
             lbl_recommended_deals: 'Ø§Ù„Ø¹Ø±ÙˆØ¶ Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡Ø§',
             lbl_trending_deals: 'ØªØ­ÙˆÙŠÙ„ Ø§Ù„ØµÙÙ‚Ø§Øª',
             lbl_name: 'Ø§Ø³Ù…',
             lbl_recipient_email: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ø§Ù„Ù…Ø³ØªÙ„Ù…",
             lbl_customize_your_message: "ØªØ®ØµÙŠØµ Ø±Ø³Ø§Ù„ØªÙƒ",
             lbl_when_send_gift: "Ù…ØªÙ‰ ØªØ±ÙŠØ¯ Ø¥Ø±Ø³Ø§Ù„ Ù‡Ø¯ÙŠØªÙƒØŸ",
             lbl_total: "Ù…Ø¬Ù…ÙˆØ¹",
             lbl_save: "Ø­ÙØ¸",
             lbl_customer_review: "Ø±Ø£ÙŠ Ø§Ù„Ø¹Ù…ÙŠÙ„",
             lbl_review_order: "Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„Ø·Ù„Ø¨",
             lbl_delete: 'Ø­Ø°Ù',
             lbl_savings: 'Ù…Ø¯Ø®Ø±Ø§Øª',
             lbl_apply: 'ØªØ·Ø¨ÙŠÙ‚',
             lbl_order: "Ø·Ù„Ø¨",
             lbl_confirm: "ØªØ¤ÙƒØ¯",
             lbl_terms_and_condition_agree: 'Ø¨Ø§Ù„Ù†Ù‚Ø± Ø¹Ù„Ù‰ "ØªØ£ÙƒÙŠØ¯ Ø§Ù„Ø·Ù„Ø¨" Ø£Ù‚Ø¨Ù„ Ø¨Ù†ÙˆØ¯ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø­Ø§Ù„ÙŠØ© ÙˆØ³ÙŠØ§Ø³Ø© Ø±Ø¯ Ø§Ù„Ø£Ù…ÙˆØ§Ù„ ÙˆØ¨ÙŠØ§Ù† Ø§Ù„Ø®ØµÙˆØµÙŠØ©.',
             lbl_payment: 'Ø¯ÙØ¹',
             lbl_net_banking: 'ØµØ§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙÙŠØ©',
             lbl_credit: 'Ø§Ø¦ØªÙ…Ø§Ù†',
             lbl_debit: 'Ù…Ø¯ÙŠÙ†',
             lbl_atm_card: 'Ø¨Ø·Ø§Ù‚Ø© ATM',
             lbl_enter_card_number: 'Ø£Ø¯Ø®Ù„ Ø±Ù‚Ù… Ø§Ù„Ø¨Ø·Ø§Ù‚Ø©',
             lbl_expiry: 'Ø§Ù†Ù‚Ø¶Ø§Ø¡',
             lbl_pay: 'Ø¯ÙØ¹',
             lbl_k_net_payment_gateway: 'K-Ù†ÙŠØª Ø¨Ø§ÙŠÙ…Ù†Øª ØºÙŠØªÙŠÙˆØ§ÙŠ',
             lbl_place: 'Ù…ÙƒØ§Ù†',
             lbl_login_with_google: 'Ø³Ø¬Ù„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… ØºÙˆØºÙ„',
             lbl_login_with_facebook: 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙÙŠØ³Ø¨ÙˆÙƒ',
             lbl_first_name: "Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø§ÙˆÙ„",
             lbl_last_name: "Ø§Ù„ÙƒÙ†ÙŠØ©",
             lbl_profile_image: "ØµÙˆØ±Ø© Ø§Ù„Ù…Ù„Ù Ø§Ù„Ø´Ø®ØµÙŠ",
             lbl_change: "ÙŠØªØºÙŠØ±ÙˆÙ†",
             lbl_select_file_to_upload: "Ø­Ø¯Ø¯ Ù…Ù„ÙØ§ Ù„ØªØ­Ù…ÙŠÙ„Ù‡",
             lbl_email_address: 'Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ',
             lbl_password: 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
             lbl_confirm_password: 'ØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
             lbl_gender: "Ø¬Ù†Ø³",
             lbl_date_of_birth: "ØªØ§Ø±ÙŠØ® Ø§Ù„ÙˆÙ„Ø§Ø¯Ø©",
             lbl_location: 'Ù…ÙˆÙ‚Ø¹',
             lbl_interested_category: "Ù…Ù‡ØªÙ… Ø§Ù„ÙØ¦Ø©",
             lbl_existing_user: "Ù…Ø³ØªØ®Ø¯Ù… Ù…ÙˆØ¬ÙˆØ¯ØŸ",
             lbl_my_purchase: "Ø´Ø±Ø§Ø¡ Ø¨Ù„Ø¯ÙŠ",
             lbl_my_account: "Ø­Ø³Ø§Ø¨ÙŠ",
             lbl_my_favorites: "Ù…ÙØ¶Ù„ØªÙŠ",
             lbl_notification: "Ø¥Ø¹Ù„Ø§Ù…",
             /*Login page*/
  
             /*End Login page*/
          });
       $translateProvider.preferredLanguage(Cookies.get('language'));
    });
    if (Cookies.get('language') == 'undefined' || Cookies.get('language') == undefined)
       Cookies.set('language', 'en');
    app.controller('language', function($scope, $translate) {
       var ctrl = this;
       ctrl.updateLanguage = function(getLanguage) {
          ctrl.language = getLanguage;
          Cookies.set('language', ctrl.language);
          // Cookies.set('language',ctrl.language);
          $translate.use(ctrl.language);
       };
    });
  
  
    // create the controller and inject Angular's $scope
  
    app.controller('mainController', function($scope) {
  
      $(document).ready(function() {
          // var test = false;
          $(".homeslider").owlCarousel({
             loop: true,
             nav: false,
             dots: true,
             items: 1,
             rtl: false
          });
  
  
          $(".lan-ar").click(function() {
             setTimeout("location.reload(true);");
          });
  
  
  
          $(".lan-eng").click(function() {
            setTimeout("location.reload(true);");
          });
  
  
             
          if (Cookies.get('language') == 'ar') {
             $('.homeslider').trigger('destroy.owl.carousel');
             $(".homeslider").owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                rtl: true
             });
             $('.dealslider').trigger('destroy.owl.carousel');
             $(".dealslider").owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                items: 3,
                responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        },
                rtl: true,
                navText: [
                   "<i class='fa fa-angle-left'></i>",
                   "<i class='fa fa-angle-right'></i>"
                ]
             });
             $("html").attr("dir", "rtl");
             $(".lan-ar").css("display", "none");
             $(".lan-eng").css("display", "block");
             $('head').append('<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-rtl.css" id="bosstrap-rtl" />');
             $('head').append('<link href="assets/css/arbic.css" rel="stylesheet" type="text/css" id="arbic-rtl" />');
          } 
          else {
             $('.homeslider').trigger('destroy.owl.carousel');
             $(".homeslider").owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                rtl: false
             });
             $('.dealslider').trigger('destroy.owl.carousel');
             $(".dealslider").owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                rtl: false,
                responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        },
                navText: [
                   "<i class='fa fa-angle-left'></i>",
                   "<i class='fa fa-angle-right'></i>"
                ]
             });
             $("html").removeAttr("dir", "rtl");
             $(".lan-eng").css("display", "none");
             $(".lan-ar").css("display", "block");
             $('head').find('link#arbic-css').remove();
             $('head').find('link#bosstrap-rtl').remove();
          }
          
      });
  
  
       /*Sticky menu and header*/
       $(window).load(function() {
  
          $('.showall-review').click(function() {
             $('html,body').animate({
                   scrollTop: $('.customer-review-content').offset().top - 200
                },
                'slow');
          });
          var windowSize = $(window).width();
  
          $("header").sticky({
             topSpacing: 0
          });
          if (windowSize >= 767) {
             $(".menubar-section-mobile").sticky({
                topSpacing: 88
             });
          }
          $(".loader").fadeOut('slow');
  
       });
  
       /*End Sticky menu and header*/
       $('.menubar .menubar-content > nav > ul > li').click(function() {
  
          $(this).addClass('active').siblings('li').removeClass('active');
       });
  
       /*Value increment and decrement*/
       $scope.items = [];
       $scope.checkoutData = [{}, {}, {}];
  
       $scope.Increment = function(index) {
          if (!$scope.items[index]) {
             $scope.items[index] = 0;
          }
          $scope.items[index]++;
       };
  
       $scope.Decrement = function(index) {
          if (!$scope.items[index]) {
             $scope.items[index] = 0;
          }
          $scope.items[index]--;
       };
       /*End menu and header*/
       $('#hamburger-icon').click(function() {
          $('.menu-section').addClass('showmenu');
          $('#hamburger-icon').css('display', 'none');
          $('.menubar-section-mobile .overlay').css('display', 'block')
       });
  
       $('.close-menu,.menubar-section-mobile .overlay').click(function() {
          $('.menu-section').removeClass('showmenu');
          $('#hamburger-icon').css('display', 'block');
          $('.menubar-section-mobile .overlay').css('display', 'none')
       });
  
       $('.search-icon').click(function() {
          $('header').addClass('active-search');
       });
       $('.close-search').click(function() {
          $('header').removeClass('active-search');
       });
       $("#homeslider").owlCarousel({
          items: 1,
       });
       var windowSize = $(window).width();
       if (windowSize <= 479) {
          $('.menu-section').css('max-height', $(window).height() - 0);
       }
       $('.sub-item-level1,.sub-item-level2').click(function() {
          $(this).addClass('arrow-move');
          if ($(this).siblings('.collapse-submenu-lavel1').hasClass('in')) {
             $(this).removeClass('arrow-move');
          } else {}
  
       });
  
       // Defining the local dataset
       var cars = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Ferrari', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];
       // Constructing the suggestion engine
       var cars = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: cars
       });
       // Initializing the typeahead
       $('.typeahead').typeahead({
          hint: true,
          highlight: true,
          /* Enable substring highlighting */
          minLength: 1 /* Specify minimum characters required for showing suggestions */
       }, {
          name: 'cars',
          source: cars
       });
  
       // /* STICKY NAVIGATION END */
  
       //  var arabicPhrases = new Bloodhound({
       //   datumTokenizer: Bloodhound.tokenizers.whitespace,
       //   queryTokenizer: Bloodhound.tokenizers.whitespace,
       //   local: [
       //     "Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©",
       //     "Ù†Ø¹Ù…",
       //     "Ù„Ø§",
       //     "Ù…Ø±Ø­Ø¨Ø§",
       //     "Ø£Ù‡Ù„Ø§"
       //   ]
       // });
  
       // $('.typeahead').typeahead({
       //   hint: false
       // },
       // {
       //   name: 'arabic-phrases',
       //   source: arabicPhrases
       // });
  
       $('.navbar-brand').click(function() {
          window.location.replace("http://34.201.51.93");
       });
  
       // $('.input-label input[type="text"],.input-label input[type="password"],.input-label textarea,.input-label input[type="email"]').focus(function() {
         $(".singline-form .input-label input").focus(function()
         {
          $(this).parent(".input-label").addClass('input-label-show');
          
         });
        $('.singline-form .input-label input').blur(function(){
          if ($(this).val() !='') {
             $(this).parent().addClass('input-label-show');
          }
          else {
             $(this).parent().removeClass('input-label-show');
          }
       });
       // $('.input-label input[type="text"],.input-label textarea,.input-label input[type="password"],.input-label input[type="email"]').focusout(function() {
       //    if ($(this).val().length < 1) {
       //       $(this).parent().removeClass('input-label-show');
       //    }
       // });
       $('input[name="birthdate"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          rtl: false,
          "locale": {
             "daysOfWeek": [
                "son",
                "mon",
                "Thu",
                "Wen",
                "Thes",
                "Fri",
                "Sat"
             ],
             "monthNames": [
                "Janeiro",
                "Fevereiro",
                "MarÃ§o",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
             ],
          }
       });
       $('.fileinput').fileinput();
  
       var owlAPi;
       $scope.items = [{
             img: 'banner1',
             headdingtext: '500,000+ Coupons for 50,000 Stores',
             subheading: 'Need some super savings on your day to day expenses?'
          },
          {
             img: 'banner1',
             headdingtext: '500,000+ Coupons for 50,000 Stores',
             subheading: 'Need some super savings on your day to day expenses?'
          }
       ];
       $scope.properties = {
          // autoHeight:true,
          animateIn: 'fadeIn',
          lazyLoad: true,
          items: 1,
          margin: 0,
          dots: false,
          loop: true,
          rtl: false
  
       };
  
       $scope.dealitems = [{
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          }
       ];
       $scope.productitem = [{
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
          {
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          },
       ];
       $scope.productitem_details = [{
          img: 'hotel',
          rating: 98,
          offertext: 'Heavy discount on movie tickets at Regal Cinema',
          oldprice: 200,
          newprice: 180,
          discount: 15,
       }, ];
  
       $scope.ready = function($api) {
          owlAPi = $api;
       };
  
       $scope.toggle = function() {
          return !this.booleanVal;
       };
  
       $scope.toggle = false;
       //  document.getElementById('arbic-rtl').disabled = true;
       //   document.getElementById('bosstrap-rtl').disabled = true;
  
       // $('.lan-ar').click(function(){
       //     $('html').attr('dir','rtl');
       //      document.getElementById('arbic-rtl').disabled  = false;
       //      document.getElementById('bosstrap-rtl').disabled = false;
       // });
    });
  
    app.controller('login-Controller', function($scope) {
  
  
    });
    app.controller('signup-Controller', function($scope) {
  
    });
    app.controller('demo-Controller', function($scope) {
       $('.input-label input[type="text"],.input-label input[type="password"],.input-label input[type="email"]').focus(function() {
          $(this).parents().addClass('input-label-show');
          if ($(this).val().length > 0) {
             $(this).parents().addClass('input-label-show');
          }
       });
       $('.input-label input[type="text"],.input-label input[type="password"],.input-label input[type="email"]').focusout(function() {
          if ($(this).val().length < 1) {
             $(this).parents().removeClass('input-label-show');
          }
       });
    });
    app.controller('home-Controller', function($scope, $translate) {
       $scope.toggle = false;
  
       setTimeout(function(){
          $(".dealslider").owlCarousel({
          loop: true,
          nav: false,
          dots: false,
          items: 3,
          rtl: false,
          responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        },
          navText: [
             "<i class='fa fa-angle-left'></i>",
             "<i class='fa fa-angle-right'></i>"
          ]
       });
       $(".lan-ar").click(function() {
             setTimeout("location.reload(true);");
          });
  
  
  
          $(".lan-eng").click(function() {
            setTimeout("location.reload(true);");
          });
  
  
             
          if (Cookies.get('language') == 'ar') {
             $('.homeslider').trigger('destroy.owl.carousel');
             $(".homeslider").owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                rtl: true
             });
             $('.dealslider').trigger('destroy.owl.carousel');
             $(".dealslider").owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                items: 3,
                rtl: true,
                responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        },
                navText: [
                   "<i class='fa fa-angle-left'></i>",
                   "<i class='fa fa-angle-right'></i>"
                ]
             });
             $("html").attr("dir", "rtl");
             $(".lan-ar").css("display", "none");
             $(".lan-eng").css("display", "block");
             $('head').append('<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-rtl.css" id="bosstrap-rtl" />');
             $('head').append('<link href="assets/css/arbic.css" rel="stylesheet" type="text/css" id="arbic-rtl" />');
          } 
          else {
             $('.homeslider').trigger('destroy.owl.carousel');
             $(".homeslider").owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                rtl: false
             });
             $('.dealslider').trigger('destroy.owl.carousel');
             $(".dealslider").owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        },
                rtl: false,
                navText: [
                   "<i class='fa fa-angle-left'></i>",
                   "<i class='fa fa-angle-right'></i>"
                ]
             });
             $("html").removeAttr("dir", "rtl");
             $(".lan-eng").css("display", "none");
             $(".lan-ar").css("display", "block");
             $('head').find('link#arbic-css').remove();
             $('head').find('link#bosstrap-rtl').remove();
          }
      }, 0);
       
       $(".deal-item").click(function(){
            window.location.href = '#/product-details';
          })
  
       $scope.dealitems = [{
             img: 'hotel',
             rating: 98,
             offertext: 'Heavy discount on movie tickets at Regal Cinema',
             oldprice: 200,
             newprice: 180,
             discount: 15,
          },
          {
             img: 'hotel',
             rating: 68,
             offertext: 'Get awesome deals on skyrope and other fun activities',
             oldprice: 200,
             newprice: 180,
             discount: 30,
          }
       ];
       //  $scope.productitem = [
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       //   { img:'hotel', rating: 98, offertext:'Heavy discount on movie tickets at Regal Cinema', oldprice:200, newprice:180, discount: 15, },
       //   { img:'hotel',  rating: 68, offertext:'Get awesome deals on skyrope and other fun activities', oldprice:200, newprice:180, discount: 30,  },
       // ];
       $scope.productitem_details = [{
          img: 'hotel',
          rating: 98,
          offertext: 'Heavy discount on movie tickets at Regal Cinema',
          oldprice: 200,
          newprice: 180,
          discount: 15,
       }, ];
       $(".like-deal").click(function() {
          $(this).toggleClass('active');
       });
  
  
    });
  
  
    app.controller('productlist-Controller', function($scope, $window) {
  
          
  
       var windowSize = $(window).width();
       $('.Fillter .visible-xs a').click(function() {
          $('.product-list .sidebar').addClass('scrollbar').css('max-height', $(window).height());
       });
  
       if ($(window).width() > 767) {
          var sidebar = new StickySidebar('#sidebar', {
             containerSelector: '#main-content',
             innerWrapperSelector: '.sidebar__inner',
             topSpacing: 20,
             bottomSpacing: 20
          });
       }
       $('.sidebar .content-box ul.select-item-list li').click(function() {
          $(this).addClass('active').siblings('li').removeClass('active');
       });
       $('.sidebar .content-box ul.select-option-list li .checkbox-button input').click(function() {
          if ($(this).is(':checked')) {
             $(this).parents('li').addClass('active');
          } else {
             $(this).parents('li').removeClass('active');
          }
       });
       $("#price-slider").roundSlider({
          radius: 80,
          circleShape: "pie",
          sliderType: "min-range",
          value: 1200,
          min: 0,
          max: 1200,
          startAngle: 315,
          width: 5,
          showTooltip: true,
          editableTooltip: false,
       });
  
  
  
       setTimeout(function() {
          //     map = new google.maps.Map(document.getElementById('map'), {
          //     center: {lat: -34.397, lng: 150.644},
          //     zoom: 8
          // });
  
          $(".deal-item").click(function(){
            window.location.href = '#/product-details';
          })
          var uluru = {
             lat: -34.397,
             lng: 150.644
          };
          var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 4,
             center: uluru,
             styles: [{
                   "elementType": "geometry",
                   "stylers": [{
                      "color": "#f5f5f5"
                   }]
                },
                {
                   "elementType": "labels.icon",
                   "stylers": [{
                      "visibility": "off"
                   }]
                },
                {
                   "elementType": "labels.text.fill",
                   "stylers": [{
                      "color": "#616161"
                   }]
                },
                {
                   "elementType": "labels.text.stroke",
                   "stylers": [{
                      "color": "#f5f5f5"
                   }]
                },
                {
                   "featureType": "administrative.land_parcel",
                   "elementType": "labels.text.fill",
                   "stylers": [{
                      "color": "#bdbdbd"
                   }]
                },
                {
                   "featureType": "poi",
                   "elementType": "geometry",
                   "stylers": [{
                      "color": "#eeeeee"
                   }]
                },
                {
                   "featureType": "poi",
                   "elementType": "labels.text.fill",
                   "stylers": [{
                      "color": "#757575"
                   }]
                },
                {
                   "featureType": "poi.park",
                   "elementType": "geometry",
                   "stylers": [{
                      "color": "#e5e5e5"
                   }]
                },
                {
                   "featureType": "poi.park",
                   "elementType": "labels.text.fill",
                   "stylers": [{
                      "color": "#9e9e9e"
                   }]
                },
                {
                   "featureType": "road",
                   "elementType": "geometry",
                   "stylers": [{
                      "color": "#ffffff"
                   }]
                },
                {
                   "featureType": "road.arterial",
                   "elementType": "labels.text.fill",
                   "stylers": [{
                      "color": "#757575"
                   }]
                },
                {
                   "featureType": "road.highway",
                   "elementType": "geometry",
                   "stylers": [{
                      "color": "#dadada"
                   }]
                },
                {
                   "featureType": "road.highway",
                   "elementType": "labels.text.fill",
                   "stylers": [{
                      "color": "#616161"
                   }]
                },
                {
                   "featureType": "road.local",
                   "elementType": "labels.text.fill",
                   "stylers": [{
                      "color": "#9e9e9e"
                   }]
                },
                {
                   "featureType": "transit.line",
                   "elementType": "geometry",
                   "stylers": [{
                      "color": "#e5e5e5"
                   }]
                },
                {
                   "featureType": "transit.station",
                   "elementType": "geometry",
                   "stylers": [{
                      "color": "#eeeeee"
                   }]
                },
                {
                   "featureType": "water",
                   "elementType": "geometry",
                   "stylers": [{
                      "color": "#c9c9c9"
                   }]
                },
                {
                   "featureType": "water",
                   "elementType": "labels.text.fill",
                   "stylers": [{
                      "color": "#9e9e9e"
                   }]
                }
             ]
          });
  
          var contentString = '<div id="content-user" class="map-inner-content">' +
             '<div id="bodyContent">' +
             '<div class="map-content">' +
             '<div class="text">' +
             '3 Cources Itlian meal with wine house' +
             '</div>' +
             '<div class="dela-offer-price ro-bo">' +
             '<span class="old-price ro-r ng-binding">200 KD</span>' +
             '<span class="new-price text-skybl ng-binding"> 180 KD </span>' +
             '<span class="discount ng-binding"> 15 % Off</span>' +
             '</div>' +
             '</div>' +
             '</div>' +
             '</div>';
  
          var infowindow = new google.maps.InfoWindow({
             content: contentString,
             shadowStyle: 1,
             padding: 0,
             backgroundColor: 'rgb(57,57,57)',
             borderRadius: 5,
             arrowSize: 10,
             borderWidth: 1,
             borderColor: '#2c2c2c',
             disableAutoPan: true,
             hideCloseButton: true,
             arrowPosition: 30,
             backgroundClassName: 'transparent',
             arrowStyle: 2
          });
  
          var marker = new google.maps.Marker({
             position: uluru,
             map: map,
             title: 'Uluru (Ayers Rock)'
  
          });
          marker.addListener('click', function() {
             infowindow.open(map, marker);
          });
  
       }, 3000);
  
  
  
  
    });
    app.controller('cartpayment-Controller', function($scope) {
       
    });
    app.controller('productdetails-Controller', function($scope) {
       $(".like-deal").click(function() {
          $(this).toggleClass('active');
       });
       
  
      setTimeout(function(){
        $(".deal-item").click(function(){
            window.location.href = '#/product-details';
            $(window).scrollTop(0);
          });
        
        $(".dealslider").owlCarousel({
          loop: true,
          nav: false,
          dots: false,
          items: 3,
          rtl: false,
          responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        },
          navText: [
             "<i class='fa fa-angle-left'></i>",
             "<i class='fa fa-angle-right'></i>"
          ]
       });
       $(".lan-ar").click(function() {
             setTimeout("location.reload(true);");
          });
  
  
  
          $(".lan-eng").click(function() {
            setTimeout("location.reload(true);");
          });
  
  
             
          if (Cookies.get('language') == 'ar') {
             $('.homeslider').trigger('destroy.owl.carousel');
             $(".homeslider").owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                rtl: true
             });
             $('.dealslider').trigger('destroy.owl.carousel');
             $(".dealslider").owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                items: 3,
                rtl: true,
                responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        },
                navText: [
                   "<i class='fa fa-angle-left'></i>",
                   "<i class='fa fa-angle-right'></i>"
                ]
             });
             $("html").attr("dir", "rtl");
             $(".lan-ar").css("display", "none");
             $(".lan-eng").css("display", "block");
             $('head').append('<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-rtl.css" id="bosstrap-rtl" />');
             $('head').append('<link href="assets/css/arbic.css" rel="stylesheet" type="text/css" id="arbic-rtl" />');
          } 
          else {
             $('.homeslider').trigger('destroy.owl.carousel');
             $(".homeslider").owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                rtl: false
             });
             $('.dealslider').trigger('destroy.owl.carousel');
             $(".dealslider").owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                rtl: false,
                responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        },
                navText: [
                   "<i class='fa fa-angle-left'></i>",
                   "<i class='fa fa-angle-right'></i>"
                ]
             });
             $("html").removeAttr("dir", "rtl");
             $(".lan-eng").css("display", "none");
             $(".lan-ar").css("display", "block");
             $('head').find('link#arbic-css').remove();
             $('head').find('link#bosstrap-rtl').remove();
          }
      }, 0);
       $('a.addtocart').click(function() {
          window.location.replace("/cartpayment.html");
       });
       $('.btn-number').click(function(e) {
          e.preventDefault();
          fieldName = $(this).attr('data-field');
          type = $(this).attr('data-type');
          var input = $("input[name='" + fieldName + "']");
          var currentVal = parseInt(input.val());
          if (!isNaN(currentVal)) {
             if (type == 'minus') {
                if (currentVal > input.attr('min')) {
                   input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                   $(this).attr('disabled', true);
                }
             } else if (type == 'plus') {
                if (currentVal < input.attr('max')) {
                   input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                   $(this).attr('disabled', true);
                }
             }
          } else {
             input.val(0);
          }
       });
       $('.input-number').focusin(function() {
          $(this).data('oldValue', $(this).val());
       });
       $('.input-number').change(function() {
          minValue = parseInt($(this).attr('min'));
          maxValue = parseInt($(this).attr('max'));
          valueCurrent = parseInt($(this).val());
          name = $(this).attr('name');
          if (valueCurrent >= minValue) {
             $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
          } else {
             alert('Sorry, the minimum value was reached');
             $(this).val($(this).data('oldValue'));
          }
          if (valueCurrent <= maxValue) {
             $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
          } else {
             alert('Sorry, the maximum value was reached');
             $(this).val($(this).data('oldValue'));
          }
       });
       $(".input-number").keydown(function(e) {
          // Allow: backspace, delete, tab, escape, enter and .
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
             (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
             (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
          }
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
             e.preventDefault();
          }
       });
       $('.input-label input,.input-label textarea').focus(function() {
          $(this).parents().addClass('input-label-show');
          if ($(this).val().length > 0) {
             (this).parents().addClass('input-label-show');
          }
       });
    });
  
    // app.controller('language', function($scope,$translate) {
  
    //               var ctrl = this;
    //               ctrl.language = 'en';
    //               ctrl.languages = ['en', 'ar'];
    //               ctrl.updateLanguage = function(getLanguage) {
  
    //                 ctrl.language = getLanguage;
    //                 $translate.use(ctrl.language);
  
    //               };
    //     });
    //End Inventory section css//