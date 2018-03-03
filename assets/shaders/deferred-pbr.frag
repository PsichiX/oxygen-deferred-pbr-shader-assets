#extension GL_EXT_draw_buffers : require

void writeMaterial(vec4 albedo, vec3 normal, vec3 metalnessSmoothnessEmission) {
  gl_FragData[0] = albedo;
  gl_FragData[1] = vec4(normal, albedo.a);
  gl_FragData[2] = vec4(metalnessSmoothnessEmission, albedo.a);
}

void writeLight(vec3 emission, vec3 normal) {
  gl_FragData[0] = vec4(emission, 1.0);
  gl_FragData[1] = vec4(normal, 1.0);
}
