---
bg: "star.gif"
layout: page
title: "Exercise"
crawlertitle: "076923 : Exercise"
permalink: /exercise/
summary: "Exercise program."
active: Exercise
date: 9/12/2017 3:37:34 PM 
---

{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}

  {% for post in posts limit: 1 %}
    {% if post.categories contains "exercise" %}
      {% if post.tags contains t %}
      
<h2 class="category-key" id="{{ t | downcase }}">{{ t | capitalize }}</h2>

  {% endif %}
  {% endif %}
  {% endfor %}

  <ul class="year">
    {% for post in posts %}
      {% if post.tags contains t %}
        {% if post.categories contains "exercise" %}
        <li>
          {% if post.lastmod %}
            <a href="{{ post.url }}">{{ post.title }}</a> - [<a href="{{ post.url }}#disqus_thread" data-disqus-identifier="{{ post.id }}">0 Comments</a>]
            <span class="date">{{ post.lastmod | date: "%Y-%m-%d"  }}</span>
          {% else %}
            <a href="{{ post.url }}">{{ post.title }} </a> - [<a href="{{ post.url }}#disqus_thread" data-disqus-identifier="{{ post.id }}">0 Comments</a>]
            <span class="date">{{ post.date | date: "%Y-%m-%d"  }}</span>
          {% endif %}
        </li>
      {% endif %}
      {% endif %}
    {% endfor %}
  </ul>

{% endfor %}

