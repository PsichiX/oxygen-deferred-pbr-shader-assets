#include "shaders/deferred-pbr.frag"

precision mediump float;

uniform vec4 uColor;
uniform vec3 uDirection;

void main() {
  vec3 c = uColor.rgb * uColor.a;
  vec3 n = normalize(uDirection);

  writeLight(c, n);
}
