



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">


    <title>backbonetutorials/text.js at gh-pages · thomasdavis/backbonetutorials</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="thomasdavis/backbonetutorials" name="twitter:title" /><meta content="backbonetutorials - As single page apps and large scale javascript applications become more prominent on the web, useful resources for those developers who are jumping the ship are crucial." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/416209?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/416209?v=3&amp;s=400" property="og:image" /><meta content="thomasdavis/backbonetutorials" property="og:title" /><meta content="https://github.com/thomasdavis/backbonetutorials" property="og:url" /><meta content="backbonetutorials - As single page apps and large scale javascript applications become more prominent on the web, useful resources for those developers who are jumping the ship are crucial." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="DC849C61:706F:179A45EE:5466E679" name="octolytics-dimension-request_id" /><meta content="2193104" name="octolytics-actor-id" /><meta content="stargazer8tw" name="octolytics-actor-login" /><meta content="2984c9cf4f92ed2a5231126cab5762f823d252a300aaebaf525b6f8bb568204c" name="octolytics-actor-hash" />

    <meta content="Rails, view, blob#show" name="analytics-event" />



    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="HP+4CqoPG+8aigkubv/igRrjtzBs65gcqFnO+leLQ0l9lwbdWLE1zIyAIfqO8Ibij4o5gsl1aIduZzeAjYybyQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-59da74dcbe2f1d555e306461652274f8741238a64e7b1fe8cc5a286232044835.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-22a0054564248c6dd87336e91bca068b1ab49e28ee1062519b3a0722d29da804.css" media="all" rel="stylesheet" type="text/css" />




    <meta http-equiv="x-pjax-version" content="f3f7311a29adcb300a5a91e93e68baf2">


  <meta name="description" content="backbonetutorials - As single page apps and large scale javascript applications become more prominent on the web, useful resources for those developers who are jumping the ship are crucial.">
  <meta name="go-import" content="github.com/thomasdavis/backbonetutorials git https://github.com/thomasdavis/backbonetutorials.git">

  <meta content="416209" name="octolytics-dimension-user_id" /><meta content="thomasdavis" name="octolytics-dimension-user_login" /><meta content="1549501" name="octolytics-dimension-repository_id" /><meta content="thomasdavis/backbonetutorials" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1549501" name="octolytics-dimension-repository_network_root_id" /><meta content="thomasdavis/backbonetutorials" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/thomasdavis/backbonetutorials/commits/gh-pages.atom" rel="alternate" title="Recent Commits to backbonetutorials:gh-pages" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">






      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/thomasdavis/backbonetutorials/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/thomasdavis/backbonetutorials/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>


<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/stargazer8tw" data-ga-click="Header, go to profile, text:username">
      <img alt="stargazer8tw" class="avatar" data-user="2193104" height="20" src="https://avatars3.githubusercontent.com/u/2193104?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">stargazer8tw</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="thomasdavis/backbonetutorials">This repository</span>
    </li>
      <li>
        <a href="/thomasdavis/backbonetutorials/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3ruKnuMjwJFxOTphWIcdIG4T8fc5DGkUJvnAJyyRN9GQk6oWc3Qe2b41Y3zkXetBsyZq6PSR3NGmM8zTWJMEAw==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



  </div>
</div>






      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">

    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6bVxHgdDkmGeFpeqHZLwDrUGbgIQaaSv8CLngbupDrxcezX+klS3LHHeoGkX+2GFk/5iIryUdeeSUQvTH97oJA==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1549501" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/thomasdavis/backbonetutorials/watchers">
        194
      </a>
      <a href="/thomasdavis/backbonetutorials/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/thomasdavis/backbonetutorials/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0RBunA4K8aCqVvLdAdoYDMc78lN6z+Zk2baJnlHn1k9ux070JRupIPC9wsRF8i/th0e9DA/DxSGYY7JfZaUJ8w==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar thomasdavis/backbonetutorials">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/thomasdavis/backbonetutorials/stargazers">
          2,083
        </a>
</form>
    <form accept-charset="UTF-8" action="/thomasdavis/backbonetutorials/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9yMG+s+G5UDPJrxpbsbh5geTAI/sVyZyCe+4F6GV3+37iu1PJZHC9AsDuKPf3vLWM8Fiqc4u0tsZClq0UH+1Fg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star thomasdavis/backbonetutorials">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/thomasdavis/backbonetutorials/stargazers">
          2,083
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/thomasdavis/backbonetutorials/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of thomasdavis/backbonetutorials to your account" aria-label="Fork your own copy of thomasdavis/backbonetutorials to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/thomasdavis/backbonetutorials/network" class="social-count">1,799</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/thomasdavis" class="url fn" itemprop="url" rel="author"><span itemprop="title">thomasdavis</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/thomasdavis/backbonetutorials" class="js-current-repository" data-pjax="#js-repo-pjax-container">backbonetutorials</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">

<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/thomasdavis/backbonetutorials/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/thomasdavis/backbonetutorials" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /thomasdavis/backbonetutorials">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/thomasdavis/backbonetutorials/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /thomasdavis/backbonetutorials/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/thomasdavis/backbonetutorials/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /thomasdavis/backbonetutorials/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/thomasdavis/backbonetutorials/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /thomasdavis/backbonetutorials/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/thomasdavis/backbonetutorials/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /thomasdavis/backbonetutorials/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/thomasdavis/backbonetutorials/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /thomasdavis/backbonetutorials/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">


<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/thomasdavis/backbonetutorials.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/thomasdavis/backbonetutorials.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:thomasdavis/backbonetutorials.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:thomasdavis/backbonetutorials.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/thomasdavis/backbonetutorials" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/thomasdavis/backbonetutorials" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/thomasdavis/backbonetutorials/archive/gh-pages.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of thomasdavis/backbonetutorials as a zip file"
                   title="Download the contents of thomasdavis/backbonetutorials as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>


<a href="/thomasdavis/backbonetutorials/blob/1782c2c3299338e79ef5f4a9a950e8fcf90b42ac/examples/modular-backbone/js/text.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:01bf0925ee3529782722aebe861c4654 -->

<div class="file-navigation">

<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="gh-pages"
    data-ref="gh-pages"
    title="gh-pages"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">gh-pages</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasdavis/backbonetutorials/blob/gh-pages/examples/modular-backbone/js/text.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/thomasdavis/backbonetutorials/find/gh-pages"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="examples/modular-backbone/js/text.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/thomasdavis/backbonetutorials" class="" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">backbonetutorials</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/thomasdavis/backbonetutorials/tree/gh-pages/examples" class="" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">examples</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/thomasdavis/backbonetutorials/tree/gh-pages/examples/modular-backbone" class="" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">modular-backbone</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/thomasdavis/backbonetutorials/tree/gh-pages/examples/modular-backbone/js" class="" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">text.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Thomas Davis" class="avatar" data-user="416209" height="24" src="https://avatars3.githubusercontent.com/u/416209?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/thomasdavis" rel="author">thomasdavis</a></span>
        <time datetime="2011-10-13T13:42:31Z" is="relative-time">Oct 13, 2011</time>
        <div class="commit-title">
            <a href="/thomasdavis/backbonetutorials/commit/3b71989f4cfc2e8acef0307974ae3a490bd4aac6" class="message" data-pjax="true" title="Added in example">Added in example</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Thomas Davis" data-user="416209" height="24" src="https://avatars3.githubusercontent.com/u/416209?v=3&amp;s=48" width="24" />
            <a href="/thomasdavis">thomasdavis</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>12 lines (11 sloc)</span>
          <span class="meta-divider"></span>
        <span>3.048 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/thomasdavis/backbonetutorials/raw/gh-pages/examples/modular-backbone/js/text.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/thomasdavis/backbonetutorials/blame/gh-pages/examples/modular-backbone/js/text.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/thomasdavis/backbonetutorials/commits/gh-pages/examples/modular-backbone/js/text.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/thomasdavis/backbonetutorials/edit/gh-pages/examples/modular-backbone/js/text.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/thomasdavis/backbonetutorials/delete/gh-pages/examples/modular-backbone/js/text.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>


  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c"><span class="pl-pdc">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> RequireJS text 0.27.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> Available via the MIT or new BSD license.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> see: http://github.com/jrburke/requirejs for details</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"><span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">(<span class="pl-s">function</span>(){<span class="pl-s">var</span> k<span class="pl-ko">=</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>Msxml2.XMLHTTP<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>Microsoft.XMLHTTP<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>Msxml2.XMLHTTP.4.0<span class="pl-pds">&quot;</span></span>],n<span class="pl-ko">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-ko">*</span>&lt;<span class="pl-cce">\?</span>xml(<span class="pl-c1">\s</span>)<span class="pl-ko">+</span>version=<span class="pl-c1">[<span class="pl-cce">\&#39;\&quot;</span>]</span>(<span class="pl-c1">\d</span>)<span class="pl-ko">*</span><span class="pl-c1">.</span>(<span class="pl-c1">\d</span>)<span class="pl-ko">*</span><span class="pl-c1">[<span class="pl-cce">\&#39;\&quot;</span>]</span>(<span class="pl-c1">\s</span>)<span class="pl-ko">*</span><span class="pl-cce">\?</span>&gt;<span class="pl-pds">/</span>im</span>,o<span class="pl-ko">=</span><span class="pl-sr"><span class="pl-pds">/</span>&lt;body<span class="pl-c1">[<span class="pl-ko">^</span>&gt;]</span><span class="pl-ko">*</span>&gt;<span class="pl-c1">\s</span><span class="pl-ko">*</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-ko">+</span>)<span class="pl-c1">\s</span><span class="pl-ko">*</span>&lt;<span class="pl-cce">\/</span>body&gt;<span class="pl-pds">/</span>im</span>,i<span class="pl-ko">=typeof</span> location<span class="pl-ko">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-ko">&amp;&amp;</span>location.href,p<span class="pl-ko">=</span>i<span class="pl-ko">&amp;&amp;</span>location.protocol<span class="pl-ko">&amp;&amp;</span>location.protocol.<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\:</span><span class="pl-pds">/</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),q<span class="pl-ko">=</span>i<span class="pl-ko">&amp;&amp;</span>location.hostname,r<span class="pl-ko">=</span>i<span class="pl-ko">&amp;&amp;</span>(location.port<span class="pl-ko">||void</span> <span class="pl-cn">0</span>),j<span class="pl-ko">=</span>[];define(<span class="pl-s">function</span>(){<span class="pl-s">var</span> g,h,l;<span class="pl-ko">typeof</span> <span class="pl-sc">window</span><span class="pl-ko">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-ko">&amp;&amp;</span><span class="pl-sc">window</span>.<span class="pl-sc">navigator</span><span class="pl-ko">&amp;&amp;</span><span class="pl-sc">window</span>.<span class="pl-enf">document?h</span><span class="pl-ko">=</span><span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){<span class="pl-s">var</span> c<span class="pl-ko">=</span>g.createXhr();c.<span class="pl-sf">open</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>,a,<span class="pl-ko">!</span><span class="pl-cn">0</span>);c.onreadystatechange<span class="pl-ko">=</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-s">function</span>(){c.readyState<span class="pl-ko">===</span><span class="pl-cn">4</span><span class="pl-ko">&amp;&amp;</span>b(c.responseText)};c.<span class="pl-sf">send</span>(<span class="pl-c1">null</span>)}<span class="pl-ko">:typeof</span> process<span class="pl-ko">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-ko">&amp;&amp;</span>process.versions<span class="pl-ko">&amp;&amp;</span>process.versions.node<span class="pl-ko">?</span>(l<span class="pl-ko">=</span><span class="pl-sf">require</span>.nodeRequire(<span class="pl-s1"><span class="pl-pds">&quot;</span>fs<span class="pl-pds">&quot;</span></span>),<span class="pl-enf">h</span><span class="pl-ko">=</span><span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){b(l.readFileSync(a,<span class="pl-s1"><span class="pl-pds">&quot;</span>utf8<span class="pl-pds">&quot;</span></span>))})<span class="pl-ko">:typeof</span> <span class="pl-sc">Packages</span><span class="pl-ko">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-ko">&amp;&amp;</span>(<span class="pl-enf">h</span><span class="pl-ko">=</span><span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){<span class="pl-s">var</span> c<span class="pl-ko">=</span><span class="pl-ko">new</span> <span class="pl-enti">java.io</span>.File(a),e<span class="pl-ko">=</span><span class="pl-sc">java</span>.lang.System.getProperty(<span class="pl-s1"><span class="pl-pds">&quot;</span>line.separator<span class="pl-pds">&quot;</span></span>),c<span class="pl-ko">=</span><span class="pl-ko">new</span> <span class="pl-enti">java.io</span>.BufferedReader(<span class="pl-ko">new</span> <span class="pl-enti">java.io</span>.InputStreamReader(<span class="pl-ko">new</span> <span class="pl-enti">java.io</span>.FileInputStream(c),<span class="pl-s1"><span class="pl-pds">&quot;</span>utf-8<span class="pl-pds">&quot;</span></span>)),d,f,g<span class="pl-ko">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-k">try</span>{d<span class="pl-ko">=</span><span class="pl-ko">new</span> <span class="pl-enti">java.lang</span>.StringBuffer;(f<span class="pl-ko">=</span>c.readLine())<span class="pl-ko">&amp;&amp;</span>f.length()<span class="pl-ko">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">f.<span class="pl-sf">charAt</span>(<span class="pl-cn">0</span>)<span class="pl-ko">===</span><span class="pl-cn">65279</span><span class="pl-ko">&amp;&amp;</span>(f<span class="pl-ko">=</span>f.<span class="pl-sf">substring</span>(<span class="pl-cn">1</span>));<span class="pl-k">for</span>(d.append(f);(f<span class="pl-ko">=</span>c.readLine())<span class="pl-ko">!==</span><span class="pl-c1">null</span>;)d.append(e),d.append(f);g<span class="pl-ko">=</span><span class="pl-sc">String</span>(d.<span class="pl-sf">toString</span>())}<span class="pl-k">finally</span>{c.<span class="pl-sf">close</span>()}b(g)});<span class="pl-k">return</span> g<span class="pl-ko">=</span>{version<span class="pl-ko">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>0.27.0<span class="pl-pds">&quot;</span></span>,<span class="pl-enf">strip</span>:<span class="pl-s">function</span>(<span class="pl-vpf">a</span>){<span class="pl-k">if</span>(a){<span class="pl-s">var</span> a<span class="pl-ko">=</span>a.<span class="pl-sf">replace</span>(n,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),b<span class="pl-ko">=</span>a.<span class="pl-sf">match</span>(o);b<span class="pl-ko">&amp;&amp;</span>(a<span class="pl-ko">=</span>b[<span class="pl-cn">1</span>])}<span class="pl-k">else</span> a<span class="pl-ko">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-k">return</span> a},<span class="pl-enf">jsEscape</span>:<span class="pl-s">function</span>(<span class="pl-vpf">a</span>){<span class="pl-k">return</span> a.<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[&#39;<span class="pl-cce">\\</span>]</span>)<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>$1<span class="pl-pds">&quot;</span></span>).<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\f</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>f<span class="pl-pds">&quot;</span></span>).<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\b</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>).<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\n</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>n<span class="pl-pds">&quot;</span></span>).<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\t</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>t<span class="pl-pds">&quot;</span></span>).<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\r</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>r<span class="pl-pds">&quot;</span></span>)},<span class="pl-enf">createXhr</span>:<span class="pl-s">function</span>(){<span class="pl-s">var</span> a,b,c;<span class="pl-k">if</span>(<span class="pl-ko">typeof</span> <span class="pl-sc">XMLHttpRequest</span><span class="pl-ko">!==</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>)<span class="pl-k">return</span> <span class="pl-ko">new</span> <span class="pl-enti">XMLHttpRequest</span>;<span class="pl-k">else</span> <span class="pl-k">for</span>(b<span class="pl-ko">=</span><span class="pl-cn">0</span>;b<span class="pl-ko">&lt;</span><span class="pl-cn">3</span>;b<span class="pl-ko">++</span>){c<span class="pl-ko">=</span>k[b];<span class="pl-k">try</span>{a<span class="pl-ko">=</span><span class="pl-ko">new</span> <span class="pl-enti">ActiveXObject</span>(c)}<span class="pl-k">catch</span>(e){}<span class="pl-k">if</span>(a){k<span class="pl-ko">=</span>[c];<span class="pl-k">break</span>}}<span class="pl-k">if</span>(<span class="pl-ko">!</span>a)<span class="pl-k">throw</span> Error(<span class="pl-s1"><span class="pl-pds">&quot;</span>createXhr(): XMLHttpRequest not available<span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> a},get<span class="pl-ko">:</span>h,<span class="pl-enf">parseName</span>:<span class="pl-s">function</span>(<span class="pl-vpf">a</span>){<span class="pl-s">var</span> b<span class="pl-ko">=!</span><span class="pl-cn">1</span>,c<span class="pl-ko">=</span>a.<span class="pl-sf">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>),e<span class="pl-ko">=</span>a.<span class="pl-sf">substring</span>(<span class="pl-cn">0</span>,c),a<span class="pl-ko">=</span>a.<span class="pl-sf">substring</span>(c<span class="pl-ko">+</span><span class="pl-cn">1</span>,a.length),c<span class="pl-ko">=</span>a.<span class="pl-sf">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span>);c<span class="pl-ko">!==-</span><span class="pl-cn">1</span><span class="pl-ko">&amp;&amp;</span>(b<span class="pl-ko">=</span>a.<span class="pl-sf">substring</span>(c<span class="pl-ko">+</span><span class="pl-cn">1</span>,a.length),b<span class="pl-ko">=</span>b<span class="pl-ko">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>strip<span class="pl-pds">&quot;</span></span>,a<span class="pl-ko">=</span>a.<span class="pl-sf">substring</span>(<span class="pl-cn">0</span>,c));<span class="pl-k">return</span>{moduleName<span class="pl-ko">:</span>e,ext<span class="pl-ko">:</span>a,strip<span class="pl-ko">:</span>b}},xdRegExp<span class="pl-ko">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>((<span class="pl-c1">\w</span><span class="pl-ko">+</span>)<span class="pl-cce">\:</span>)<span class="pl-ko">?</span><span class="pl-cce">\/\/</span>(<span class="pl-c1">[<span class="pl-ko">^</span><span class="pl-cce">\/\\</span>]</span><span class="pl-ko">+</span>)<span class="pl-pds">/</span></span>,<span class="pl-enf">useXhr</span>:<span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">e</span>){<span class="pl-s">var</span> d<span class="pl-ko">=</span>g.xdRegExp.<span class="pl-sf">exec</span>(a),</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">f;<span class="pl-k">if</span>(<span class="pl-ko">!</span>d)<span class="pl-k">return</span><span class="pl-ko">!</span><span class="pl-cn">0</span>;a<span class="pl-ko">=</span>d[<span class="pl-cn">2</span>];d<span class="pl-ko">=</span>d[<span class="pl-cn">3</span>];d<span class="pl-ko">=</span>d.<span class="pl-sf">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>);f<span class="pl-ko">=</span>d[<span class="pl-cn">1</span>];d<span class="pl-ko">=</span>d[<span class="pl-cn">0</span>];<span class="pl-k">return</span>(<span class="pl-ko">!</span>a<span class="pl-ko">||</span>a<span class="pl-ko">===</span>b)<span class="pl-ko">&amp;&amp;</span>(<span class="pl-ko">!</span>d<span class="pl-ko">||</span>d<span class="pl-ko">===</span>c)<span class="pl-ko">&amp;&amp;</span>(<span class="pl-ko">!</span>f<span class="pl-ko">&amp;&amp;!</span>d<span class="pl-ko">||</span>f<span class="pl-ko">===</span>e)},<span class="pl-enf">finishLoad</span>:<span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">e</span>,<span class="pl-vpf">d</span>){c<span class="pl-ko">=</span>b<span class="pl-ko">?</span>g.strip(c)<span class="pl-ko">:</span>c;d.isBuild<span class="pl-ko">&amp;&amp;</span>d.inlineText<span class="pl-ko">&amp;&amp;</span>(j[a]<span class="pl-ko">=</span>c);e(c)},<span class="pl-enf">load</span>:<span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">e</span>){<span class="pl-s">var</span> d<span class="pl-ko">=</span>g.parseName(a),f<span class="pl-ko">=</span>d.moduleName<span class="pl-ko">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-ko">+</span>d.ext,m<span class="pl-ko">=</span>b.toUrl(f),h<span class="pl-ko">=</span>e<span class="pl-ko">&amp;&amp;</span>e.text<span class="pl-ko">&amp;&amp;</span>e.text.useXhr<span class="pl-ko">||</span>g.useXhr;<span class="pl-ko">!</span>i<span class="pl-ko">||</span>h(m,p,q,r)<span class="pl-ko">?</span>g.get(m,<span class="pl-s">function</span>(<span class="pl-vpf">b</span>){g.finishLoad(a,d.strip,b,c,e)})<span class="pl-ko">:</span>b([f],<span class="pl-s">function</span>(<span class="pl-vpf">a</span>){g.finishLoad(d.moduleName<span class="pl-ko">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-ko">+</span>d.ext,d.strip,a,c,e)})},<span class="pl-enf">write</span>:<span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>){<span class="pl-k">if</span>(b <span class="pl-ko">in</span> j){<span class="pl-s">var</span> e<span class="pl-ko">=</span>g.jsEscape(j[b]);</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">c.asModule(a<span class="pl-ko">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span><span class="pl-ko">+</span>b,<span class="pl-s1"><span class="pl-pds">&quot;</span>define(function () { return &#39;<span class="pl-pds">&quot;</span></span><span class="pl-ko">+</span>e<span class="pl-ko">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;;});<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>)}},<span class="pl-enf">writeFile</span>:<span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">e</span>,<span class="pl-vpf">d</span>){<span class="pl-s">var</span> b<span class="pl-ko">=</span>g.parseName(b),f<span class="pl-ko">=</span>b.moduleName<span class="pl-ko">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-ko">+</span>b.ext,h<span class="pl-ko">=</span>c.toUrl(b.moduleName<span class="pl-ko">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-ko">+</span>b.ext)<span class="pl-ko">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>.js<span class="pl-pds">&quot;</span></span>;g.<span class="pl-sf">load</span>(f,c,<span class="pl-s">function</span>(){<span class="pl-s">var</span> <span class="pl-enf">b</span><span class="pl-ko">=</span><span class="pl-s">function</span>(<span class="pl-vpf">a</span>){<span class="pl-k">return</span> e(h,a)};<span class="pl-sc">b</span>.<span class="pl-enf">asModule</span><span class="pl-ko">=</span><span class="pl-s">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){<span class="pl-k">return</span> e.asModule(a,h,b)};g.<span class="pl-sf">write</span>(a,f,b,d)},d)}}})})();</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05353s from github-fe135-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2d727fed4d969b14b28165c75ad12d7dddd56c0198fa70cedc3fdad7ac395b2c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-cefdded3b042fd290e36fc3bec2c1744521e97ee583e06c43e76cc545f24a273.js" type="text/javascript"></script>


  </body>
</html>

