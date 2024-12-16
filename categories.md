---
layout: main
sidebar: category-list
title: Categories
---

{%- if site.posts.size > 0 -%}

  {%- include functions.html func='log' level='debug' msg='Get value' -%}
  {%- include functions.html func='get_categories' -%}
  {% assign categories = return %}

  {% assign keys = categories %}
  {% assign field = 'categories' %}
  {%- include views/segments.html -%}

{%- endif -%}