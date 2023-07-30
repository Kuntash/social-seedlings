export type FeedImageProps = {
  urls: any;
  size: 'regular' | 'small';
  color: string;
  blurHash: string;
  width?: number;
  height?: number;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
  alt?: string;
};
