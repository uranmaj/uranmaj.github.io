---
layout: default
title: Case studies
---

# {{ page.title }}

<table id="case-studies_table">
  <tbody>
    {% for case in site.case-studies %}
      <tr>
        <td class="case-studies_table-title"><a href="{{ case.url }}">{{ case.title }}</a></td>
        <td class="case-studies_table-tech">{{ case.tech }}</td>
        <td class="case-studies_table-subtitle">{{ case.subtitle }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
