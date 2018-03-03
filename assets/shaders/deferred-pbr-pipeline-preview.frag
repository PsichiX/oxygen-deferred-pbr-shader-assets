precision mediump float;

uniform sampler2D sGBufferAlbedo;
uniform sampler2D sGBufferNormal;
uniform sampler2D sGBufferMetalnessSmoothnessEmission;
uniform sampler2D sLBufferLightEmission;
uniform sampler2D sLBufferLightPath;
uniform float uMode;

varying vec2 vTexCoord;

void main() {
  vec3 albedo = texture2D(sGBufferAlbedo, vTexCoord).xyz;
  vec3 normal = texture2D(sGBufferNormal, vTexCoord).xyz;
  vec3 metalnessSmoothnessEmission =
    texture2D(sGBufferMetalnessSmoothnessEmission, vTexCoord).xyz;
  vec3 lightEmission = texture2D(sLBufferLightEmission, vTexCoord).xyz;
  vec3 lightPath = texture2D(sLBufferLightPath, vTexCoord).xyz;

  if (uMode >= 0.0 && uMode < 1.0) {
    gl_FragColor = vec4(albedo, 1.0);
  } else if (uMode >= 1.0 && uMode < 2.0) {
    gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
  } else if (uMode >= 2.0 && uMode < 3.0) {
    gl_FragColor = vec4(metalnessSmoothnessEmission.xxx, 1.0);
  } else if (uMode >= 3.0 && uMode < 4.0) {
    gl_FragColor = vec4(metalnessSmoothnessEmission.yyy, 1.0);
  } else if (uMode >= 4.0 && uMode < 5.0) {
    gl_FragColor = vec4(metalnessSmoothnessEmission.zzz, 1.0);
  } else if (uMode >= 5.0 && uMode < 6.0) {
    gl_FragColor = vec4(lightEmission, 1.0);
  } else if (uMode >= 6.0 && uMode < 7.0) {
    gl_FragColor = vec4(lightPath * 0.5 + 0.5, 1.0);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}
