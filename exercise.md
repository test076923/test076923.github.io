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
# 연습4 #
----------
{% if post.categories contains "exercise" %}
{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign exercise = tag | last %}

  <h2 class="category-key" id="{{ t | downcase }}">{{ t | capitalize }}</h2>

  <ul class="year">
    {% for post in exercise %}

      {% if post.tags contains t %}
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
    {% endfor %}
  </ul>

{% endfor %}
{% endif %}
