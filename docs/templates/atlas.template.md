{% block content %}
---
{% block header %}
## {$ doc.name $}
### File Path
{$ git.version.isSnapshot and 'master' or git.version.raw $}/{$ doc.fileInfo.projectRelativePath $}
{% endblock %}
{% block description %}
### Description
{$ doc.description $}
{% endblock %}
{% block dependencies %}
{%- if doc.requires %}
### Dependencies
{% for require in doc.requires %}* **{$ require $}**{% endfor %}
{% endif -%}
{% endblock %}
  {% block additional %}
  {% endblock %}
  {% block examples %}
  {%- if doc.examples %}
  ### Example
  {%- for example in doc.examples -%}
    {$ example | marked $}
  {%- endfor -%}
  {% endif -%}
  {% endblock %}
{% endblock %}
