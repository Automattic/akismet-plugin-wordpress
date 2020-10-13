=== Akismet Spam Protection ===
Contributors: matt, ryan, andy, mdawaffe, tellyworth, josephscott, lessbloat, eoigal, cfinke, automattic, jgs, procifer, stephdau
Tags: comments, spam, antispam, anti-spam, contact form, anti spam, comment moderation, comment spam, contact form spam, spam comments
Requires at least: 4.6
Tested up to: 5.5
Stable tag: 4.1.6
License: GPLv2 or later

The best anti-spam protection to block spam comments and spam in a contact form. The most trusted antispam solution for WordPress and WooCommerce.

== Description ==

Akismet checks your comments and contact form submissions against our global database of spam to prevent your site from publishing malicious content. You can review the comment spam it catches on your blog's "Comments" admin screen.

Major features in Akismet include:

* Automatically checks all comments and filters out the ones that look like spam.
* Each comment has a status history, so you can easily see which comments were caught or cleared by Akismet and which were spammed or unspammed by a moderator.
* URLs are shown in the comment body to reveal hidden or misleading links.
* Moderators can see the number of approved comments for each user.
* A discard feature that outright blocks the worst spam, saving you disk space and speeding up your site.

PS: You'll be prompted to get an Akismet.com API key to use it, once activated. Keys are free for personal blogs; paid subscriptions are available for businesses and commercial sites.

== Installation ==

Upload the Akismet plugin to your blog, activate it, and then enter your Akismet.com API key.

1, 2, 3: You're done!

== Changelog ==

= 4.1.7 =
*Release Date - TBD*

* Show the "Set up your Akismet account" banner on the comments admin screen, where it's relevant to mention if Akismet hasn't been configured.

= 4.1.6 =
*Release Date - 4 June 2020*

* Disable "Check for Spam" button until the page is loaded to avoid errors with clicking through to queue recheck endpoint directly.
* Add filter "akismet_enable_mshots" to allow disabling screenshot popups on the edit comments admin page.

For older changelog entries, please see the [additional changelog.txt file](https://plugins.svn.wordpress.org/akismet/trunk/changelog.txt) delivered with the plugin.

== Frequently Asked Questions ==

= What’s an API key? =

An API key is a string of characters --- like **abc123xyz456** --- that's used to register Akismet for your site. After you [sign up for Akismet](https://akismet.com/signup/), you'll receive your API key by email.

Once you have your API key, you can activate the Akismet plugin in just a few steps:

1.  Go to the Plugins tab of your WordPress dashboard.
2.  Find the Akismet plugin. Click the Activate link if it's not already active.
3.  Go to **Settings -> Akismet Anti-spam**. If you have the [Jetpack plugin](https://jetpack.com/) installed, go to **Jetpack -> Akismet Anti-spam**
4.  Enter your API key in the box.
5.  Click the **Connect with API Key** button.

You can find alternative ways to activate Akismet [here](https://docs.akismet.com/getting-started/activate/#step-5).

### Did you lose your API key?

No problem --- we're happy to [resend the API key](https://akismet.com/resend).

### Can I use the same API key for multiple sites?

Yep! If you have multiple personal sites that you want to protect with Akismet, you can use the same API key for each site.

Please note that if your site is not-personal, you will need to have a subscription for each site. If you're not sure if your site would qualify for a free key, you can refer to [this page](https://docs.akismet.com/getting-started/free-or-paid/) for help.

You can increase the number of sites covered at a rate of $10/mo per site or $100/yr per site by [following the steps in this guide](https://docs.akismet.com/account/adding-sites-to-an-existing-plus-subscription/). If you have more than 10 sites to cover, our Enterprise plan at $50/mo or $500/yr is your best option as it allows for unlimited sites with a 60,000 API call limit per month.

If you're using the Plus plan, simply [sign into your Akismet account](https://akismet.com/account/), and click the "Change Plan" link.  From there, you can select a new plan, or sign up for the Pro plan and specify how many sites you want to cover.

### How about a Multisite install?

Unless every site is purely personal, each subsite in your Multisite install will need to have its own paid subscription, even if it's using the same top level domain name.

= Can I use an Akismet API key with another service? =

An Akismet API key can only be used with the Akismet anti-spam service. An API (Application Program Interface) key can only be used with the service that it was designed to activate or continue service with.

If you purchased a theme or another plugin that requires an API key, you'll need to obtain that from that vendor.

= How do I activate the Akismet plugin? =

You can activate Akismet in your blog's WordPress dashboard by following these steps.
1. First, get the Akismet plugin by going to **Plugins -> Add New**
2. Type in **Akismet** in the search box and hit enter/return
3. Typically, the first search result is correct. Make sure the plugin's author is Automattic and click on **Install Now**
4. Wait for the install to finish, then click on the blue **Activate** button
5. After the plugin has been activated, go to **Settings -> Akismet Anti-Spam**.  If you have Jetpack installed, you'll find the Akismet menu under **Jetpack -> Akismet Anti-Spam** instead.
6. If you already have an API key, click the **Manually enter an API key** section link and enter your API key.  If you don't already have an API key, then click on the **Set up your Akismet Account** button, and you'll be guided through the process of getting one in a new window.
7. If you have Jetpack installed and have a paid plan that includes an Akismet key, click on the **Connect with Jetpack** button
8. If you're connected with Jetpack, but would like to use a different API key, feel free to click the **Manually enter an API key** link and enter your API key.

And you're done! If you run into any troubles activating the service, feel free to [get in touch](http://akismet.com/contact/).

= Does Akismet only work with WordPress? = 

While Akismet is most used on the WordPress platform it is not just for WordPress. We support a variety of other platforms such as Drupal, phpBB3, Joomla, and more.

To see a list of all platforms we support -- the ones we know about at least -- please visit the [development page](https://akismet.com/development/api/#use-a-library).

= Why do I need a WordPress.com account? =

### What is WordPress.com, and what does it have to do with Akismet?

[WordPress.com](http://wordpress.com/) is a hosted web service built on the popular open source blog and site creation tool available for free at [WordPress.org](http://wordpress.org/). The service or product you'd like to use is one of the suite of products made by [Automattic](http://automattic.com/), the company that runs WordPress.com.

To best serve our growing number of customers across the company, we've determined that a single user account management system is a necessary step toward getting seamless payment and functional integration across all of our tools.

### I use WordPress to run a blog or website, how does this new system affect that?

It depends on whether you're already a WordPress.com user or if you host your own site.

If you run your blog on WordPress.com or already have an account here, you won't need a new account at all. Simply sign in with your existing WordPress.com account and we'll redirect you back to the service of your choice as a logged in user.

NOTE: If you are already a user of Akismet or have installed Jetpack on your blog, you already have a WordPress.com account which you can use to sign in.

However, if you or your company downloaded and installed the free and open-source software available on WordPress.org, and you've never signed up for [Jetpack](http://jetpack.me/) or [VaultPress](http://vaultpress.com/) or [Akismet](http://akismet.com/) before, the new WordPress.com account you create won't affect your self-hosted installation one bit

### Why do I have to "approve" WordPress.com's connection to Akismet?

This question has a complicated and technical answer, but for our purposes here, if you've ever used Facebook or Twitter to log into a service online, you're doing the same kind of thing as we're doing with WordPress.com and Automattic's other services. As of right now, the only information WordPress.com shares to these services is your username, name, and email address.

### Does it cost anything or will I get any spam from creating this new account?

It costs nothing, and you'll get no spam from us. You can read our fascinating [terms of service](http://en.wordpress.com/tos/) to learn more.

= Should I choose a free or paid subscription? =

Free keys are for personal, non-commercial sites only --- no exceptions. If your site has advertising or affiliate links, sells products or services, solicits donations or sponsorships, or is in any way related to a business, non-profit, or educational organization --- your site is considered commercial.

**Noncompliance with these terms will result in immediate suspension of services without notice.**

Educational Institutions and Non-Profit Organizations **are not eligible for a Personal/Free plan** at this time. We do, however, waive the API comment check limits for such groups upon verification of their eligibility.

If you are ready to sign up for an Akismet subscription please head on over to the [plans page](https://akismet.com/plans/).

= How do I let Akismet know something is spam? =

Akismet is always learning so if you come across a piece of spam that Akismet misses marking it as spam will help Akismet learn and not miss similar spam in the future.

Akismet has two levels of learning -- global and local.

Local learning is taught by the site owner and occurs whenever something is marked as spam that Akismet thinks is not spam, and when something is marked as Not Spam and Akismet thinks it is. This helps Akismet learn what you like and don't like. This is partly so spammers cannot try to "poison" Akismet so easily and also because some people get angry when any comments are caught -- their blog, their comments.

Global learning is Akismet using all the input we get from site owners to learn what is actual spam and what is not.

### How can I mark items as spam?

To mark an individual comment as spam hover over it and press the "Spam" button.

If you have multiple comments you want to mark as spam just check the boxes next to the comments you want marked as spam, select the "Mark as Spam" option from the bulk menu option at the top of the screen and press the "Apply" button.

### I don't think this is working!

If you continue to see things getting through that you've marked as spam, please reach out to [Akismet Support](https://akismet.com/contact/) with a few example comments and we'll be happy to look into this further.

= What if I forgot my API key? =

If you forgot or cannot find your API key, you can get it resent to your email address here:

<http://akismet.com/resend/>

Just enter the email address you used to sign up for Akismet in the box, and click "Continue".  Your API key will be sent to you.

= Why can’t Akismet connect to my server? =

### System requirements

Akismet is a spam filtering service. It's most commonly used with WordPress, but is often used with other blog platforms, forum applications, contact forms and similar web apps. It's a centralized service, so TCP connectivity to servers at Akismet.com is required for it to work.

System requirements for the WordPress plugin are [the same as for WordPress](http://wordpress.org/about/requirements/), plus:

-   PHP's `fsockopen` and `gethostbynamel` functions must not be disabled (they are enabled by default in PHP)
-   TCP connectivity to akismet.com

Please see the next question for information about firewalls.

System requirements for [other Akismet plugins and implementations](http://akismet.com/development/) vary, but TCP connectivity is always required.

### Allowing Akismet to work with your firewall

In order for a blog or forum to use Akismet to check spam, it needs to be able to make outgoing TCP connections to servers at Akismet.com. If your network normally blocks outgoing connections from your public web servers, you'll need to add a firewall rule permitting connections to Akismet.

If your security filters allow exceptions based on hostnames, you should permit connections on port 80 to:

`rest.akismet.com
*.rest.akismet.com`

Most Akismet API calls will be made to a host name of the form `*api_key*.rest.akismet.com`, where *api_key* is an alphanumeric string that is different for each web site owner.

If your security filters only allow IP-based rules, here are the *current* IP addresses used for Akismet API calls:

`192.0.80.244
192.0.80.246
192.0.96.247
192.0.96.248
192.0.123.250
195.234.111.251
195.234.111.252`

All API calls are made on port 80 by default. If you are creating IP-based rules, it's important that you allow connections to all of the listed IP addresses.

IMPORTANT: these IP addresses are current as of 2016-01-27, but are subject to change. If you are writing IP-based firewall rules, you'll need to update those rules any time the addresses change. Please [subscribe to this post's RSS feed](feed://blog.akismet.com/akismet-hosting-faq/feed/?withoutcomments=1) in order to receive notifications of any changes.

If you have any questions about this information or need further technical details, please [contact Akismet support](http://akismet.com/contact/).

= How do I log into my Akismet account? =

Akismet uses WordPress.com user accounts for account management. To use Akismet you need to have a WordPress.com account.

### Already have a WordPress.com account?

Great! Go ahead and [sign into Akismet](http://akismet.com/account/) with your WordPress.com account.

If you don't remember your password for your WordPress.com user account, you can reset it using WordPress.com's [lost password form](https://en.wordpress.com/wp-login.php?action=lostpassword).

### Don't have a free WordPress.com account?

If you don't have a WordPress.com account, it only takes a few seconds to sign up and is totally free! Simply click "Sign in with WordPress.com" on the [Akismet.com](https://akismet.com/) homepage, click the "Create a new account" link.

### Not sure if you have a WordPress.com account?

No problem! If you use VaultPress, Crowdsignal, Jetpack, IntenseDebate, or Gravatar, you can just sign in with the same account you use for those services.

You can always [contact Akismet support](https://akismet.com/contact/) if you're not sure and we'll be happy to help!

= How do I reset or change my password? =

Akismet uses WordPress.com user accounts for account management. If you forget your WordPress.com password you can reset it by following the instructions in this guide.

You need to first visit this page: <https://wordpress.com/wp-login.php?action=lostpassword>

Next, put in the email address or username of the account you need to reset the password and press the "Get New Password" button.

You will then be taken to this screen. You can ignore the login form as you haven't reset your password yet so you cannot login.

Next, go check your email for an email from `donotreply@wordpress.com` titled "[WordPress.com] Password Reset". Inside that email is a message from us confirming that you want to reset your password. To confirm this change, click the "Reset password" button.

After clicking that button, a new window will open up that will allow you to reset your password. Just type in your new password, wait for the form to verify that you can save this password, and press the "Reset Password" button to confirm the change.

It's a good idea to use the built in "Generate strong password" button to make sure you're using a good password for your account. Make sure you copy your new password into a safe place once you've reset it.

= How do I change my account email address? =

Your Akismet account has two different email addresses: your account email address and your billing email address.

### Account Email Address

To change your account email please visit your WordPress.com [account settings page](https://wordpress.com/me/account). At the top you will see a box where you can change your email address.

After you change your email address remember to press the "Save Account Settings" button at the bottom of the page.

The change will not become active right away. You will first need to confirm the change by clicking on the confirmation link in an email that will be sent to your new email address.

### Billing Email Address

To change your billing email address, please enter your *current* billing email address or API key in the form on the [Update Billing Information](https://akismet.com/support/update-billing/) page.

Once you have done so, you will receive an email from us.  Click on "Update Billing Information." You will be able to update your Akismet plan's billing contact information and payment details on that page.

You will need to re-enter your credit card details on this page, so make sure you have those on hand when you click that link.

If you no longer have access to the billing email address, please [contact us](https://akismet.com/contact/) as soon as possible.

= Adding Sites to an Existing Plus Subscription =

If you have an Akismet Plus subscription, you can add sites to it at any time via [your account dashboard](https://akismet.com/account/). Because Plus subscriptions are per-site, you will need to update it as necessary to support the number of sites with which you would like to use the subscription.

Once you [log in to your account](https://akismet.com/account/) and locate your Subscriptions section, click on the Edit link to modify your Plus subscription.

Use the Number of Sites drop-down menu to select the new number of sites that you need to cover with this subscription, and click on the blue Submit button.

You can use this to update your card on file and change the billing from monthly to yearly and vice versa.

Personal sites that would normally [qualify for a free plan](https://docs.akismet.com/getting-started/free-or-paid/) do not need to be covered by your Plus subscription. You can simply add a new Personal subscription to your account by clicking on the blue Add Subscription button on your account dashboard.

= How do I cancel my subscription? =

You can cancel your paid subscriptions directly from the account page:
<http://akismet.com/account/>

Note: Akismet uses WordPress.com user accounts for account management. In order to access your Akismet account you need to log into your WordPress.com account.

If you have forgotten your WordPress.com account password you can reset it here:
<https://wordpress.com/wp-login.php?action=lostpassword>

After you login you will see a "Cancel" link next to each subscription. Click that link to cancel your subscription, then click the "Yes, remove this subscription from my account" to confirm.

If you're not able to cancel your account directly from your account page, please [contact Akismet Support](http://akismet.com/contact/).

= How do I change my Akismet plan? =

First you need to log into your Akismet account:
<http://akismet.com/account/>

Note: Akismet uses WordPress.com user accounts for account management. In order to access your Akismet account you need to log into your WordPress.com account.

If you have forgotten your WordPress.com account password you can reset it here:
<https://wordpress.com/wp-login.php?action=lostpassword>

Once you login you, you can visit the upgrade page located [here](https://akismet.com/account/upgrade/). This will allow you to choose a different plan for your account.

= How do I update my payment information? =

Do you need to make a payment because your account has gotten a bit behind or do you just need to change your payment method? If so, you are in the right place.

You can update your payment information directly from your Akismet account page.

First you need to head on over to the Akismet account page:
<http://akismet.com/account/>

> Note: To access your Akismet account you need to log into your WordPress.com account. If you have an Akismet subscription then you have a WordPress.com account as one was created when the Akismet account was created. It is the same login information you use to sign into Akismet.com.
>
> If you have forgotten your password you can reset it here:
> <https://wordpress.com/wp-login.php?action=lostpassword>

Next, click on the Update Payment Details link next to your current subscription.

Then you will be taken to a screen that will allow you to update your payment method by clicking on +Use a New Credit/Debit Card.

= Do you accept PayPal? =

We're only able to accept credit or debit cards as a form of payment at this time for Akismet plans.

If you opt to purchase a [Jetpack Security Daily, Jetpack Security Real-time, and Jetpack Complete plan](https://jetpack.com/pricing/) which includes an Akismet Plus subscription, Jetpack does offer PayPal as a form of payment.

= Am I able to receive a refund? =

We have a 30 day refund policy on all plans.

For monthly subscriptions you can cancel at anytime and get a refund for the most recent monthly purchase.

For annual subscriptions you are eligible for a full refund if your account is cancelled within 30 days of purchase. We do not offer pro-rated refunds on annual subscriptions.

For more information on canceling your subscription please see [this guide](https://docs.akismet.com/billing/cancel-subscription/).

To request a refund please [contact Akismet Support](http://akismet.com/contact/).