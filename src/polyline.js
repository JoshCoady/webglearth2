/**
 *
 * @fileoverview Object representing single polyline + useful operations.
 *
 * @author josh@lovetoknow.com (Joshua Coady)
 *
 * Copyright 2015 LoveToKnow, Corp. (www.lovetoknow.com)
 */

goog.provide('weapi.Polyline');



/**
 * @constructor
 */
weapi.Polyline = function() {
  /**
   * @type {!Cesium.PolylineCollection}
   */
  this.primitiveCol = new Cesium.PolylineCollection();

  /**
   * @type {!Cesium.Polyline}
   */
  this.primitive = this.primitiveCol.add();

  this.primitive.material.uniforms['color'] = new Cesium.Color(0, 0, 0, 1);
  this.primitive.width = 2;
};


/**
 * @param {!Array.<number>} positions
 */
weapi.Polyline.prototype.setPositions = function (positions) {
  var p = [];
  var l = positions.length;
  for (var i = 0; i < l; i++) {
    var carto = Cesium.Cartographic.fromDegrees(positions[i][1], positions[i][0]);
    //if(positions[i][2]) carto.height = positions[i][2];
    carto.height = positions[i][2] || 0;
    p.push(Cesium.Ellipsoid.WGS84.cartographicToCartesian(carto));
  }
  this.primitive.positions = p;
};
