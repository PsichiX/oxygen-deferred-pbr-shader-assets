import { DeferredRenderer } from 'oxygen-core';

export default class DeferredPbrRenderer extends DeferredRenderer {

  static get propsTypes() {
    return {
      shader: DeferredRenderer.propsTypes.shader,
      overrideUniforms: DeferredRenderer.propsTypes.overrideUniforms,
      overrideSamplers: DeferredRenderer.propsTypes.overrideSamplers,
      gBufferId: DeferredRenderer.propsTypes.gBufferId,
      lBufferid: DeferredRenderer.propsTypes.lBufferid,
      gBufferLayer: DeferredRenderer.propsTypes.gBufferLayer,
      lBufferLayer: DeferredRenderer.propsTypes.lBufferLayer
    };
  }

  static factory() {
    return new DeferredPbrRenderer();
  }

  constructor() {
    super();

    this.gBufferId = '#pbr-deferred-g-buffer';
    this.lBufferId = '#pbr-deferred-l-buffer';
    this.gBufferTargets = 3;
    this.lBufferTargets = 2;
  }

}
