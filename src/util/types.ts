import { VectorSource, RasterSource, Point } from 'mapbox-gl';

export interface AnchorOffsetLimits {
  'top-left': Point;
  'top-right': Point;
  'bottom-left': Point;
  'bottom-right': Point;
}

export interface AnchorsOffset extends AnchorOffsetLimits {
  center: Point;
  top: Point;
  bottom: Point;
  left: Point;
  right: Point;
}

export type Anchor = keyof AnchorsOffset;
export type AnchorLimits = keyof AnchorOffsetLimits;

export type Sources = any;

export type TilesJson = VectorSource | RasterSource;

export type LayerType =
  | 'fill'
  | 'line'
  | 'symbol'
  | 'circle'
  | 'fill-extrusion'
  | 'raster'
  | 'background';

export type AnyShapeCoordinates =
  | number[]
  | number[][]
  | number[][][]
  | number[][][][];
