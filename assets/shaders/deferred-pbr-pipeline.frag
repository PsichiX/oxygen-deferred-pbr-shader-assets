precision mediump float;

uniform sampler2D sGBufferAlbedo;
uniform sampler2D sGBufferNormal;
uniform sampler2D sGBufferMetalnessSmoothnessEmission;
uniform sampler2D sLBufferLightEmission;
uniform sampler2D sLBufferLightPath;

uniform vec4 uAmbientLight;

varying vec2 vTexCoord;

void main() {
  vec3 albedo = texture2D(sGBufferAlbedo, vTexCoord).xyz;
  vec3 normal = texture2D(sGBufferNormal, vTexCoord).xyz;
  vec3 metalnessSmoothnessEmission =
    texture2D(sGBufferMetalnessSmoothnessEmission, vTexCoord).xyz;
  vec3 lightEmission = texture2D(sLBufferLightEmission, vTexCoord).xyz;
  vec3 lightPath = texture2D(sLBufferLightPath, vTexCoord).xyz;

  vec3 d = -lightPath;
  vec3 al = uAmbientLight.rgb * uAmbientLight.a;
  float sf = clamp(dot(normal, d) + uAmbientLight.a, 0.0, 1.0);
  vec3 lc = lightEmission + al;
  vec3 sc = albedo * lc * sf + albedo * metalnessSmoothnessEmission.z;

  gl_FragColor = vec4(sc, 1.0);
}
