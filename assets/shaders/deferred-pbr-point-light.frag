#include "shaders/deferred-pbr.frag"

precision mediump float;

uniform vec4 uColor;

varying vec2 vTexCoord;

const float HPI = 1.5707963267948966192313216916398;

void main() {
  float l = length(vTexCoord);
  float d = min(1.0, l);
  float h = cos(d * HPI);
  vec3 n = vec3(normalize(vTexCoord) * d, -h) * h;
  vec3 c = uColor.rgb * uColor.a * h;

  writeLight(c, n);
}
