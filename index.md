---
layout: framework
sidebar: category-list
title: Home
# banner: "/assets/images/banners/home.jpeg"
# banner: "/assets/images/banners/skytrees.jpg"
banner: "/assets/pics/puzzles.jpg"
heading: The blog
subheading: My blog, to be exact
---

<div class="articles">
  {% if page.banner == nil %}
    {% assign banner = page.title %}
  {% endif %}

  {% include views/pagination.html %}
</div>


