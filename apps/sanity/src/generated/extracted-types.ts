/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SectionThreeDElement = {
  _type: "section.threeDElement";
  model: "donut" | "globe" | "kubik-rubik";
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionStepGuide = {
  _type: "section.stepGuide";
  items: Array<
    {
      _key: string;
    } & StepGuideItem
  >;
  link: CustomLink;
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionPricingTable = {
  _type: "section.pricingTable";
  tiers: Array<
    {
      _key: string;
    } & PricingTableTier
  >;
  yearlyDiscountPercentage: number;
  extraServiceEnabled?: boolean;
  extraService?: {
    text: string;
    cost: number;
  };
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionHero = {
  _type: "section.hero";
  title: string;
  text?: CustomRichText;
  image?: CustomImage;
  links: Array<
    {
      _key: string;
    } & CustomLink
  >;
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionCarousel = {
  _type: "section.carousel";
  slidesPerView: number;
  slides: Array<
    {
      _key: string;
    } & CarouselCard
  >;
  effect: "slide" | "coverflow" | "cube" | "fade" | "flip" | "cards";
  loop?: boolean;
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionBlog = {
  _type: "section.blog";
  text: CustomRichText;
  style:
    | "three-column"
    | "three-column-with-images"
    | "three-column-with-background-images";
  posts: Array<
    {
      _key: string;
    } & BlogSectionPost
  >;
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionCardsGrid = {
  _type: "section.cardsGrid";
  columns: 1 | 2 | 3;
  items: Array<
    {
      _key: string;
    } & DefaultCard
  >;
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionLinksList = {
  _type: "section.linksList";
  links: Array<
    {
      _key: string;
    } & CustomLink
  >;
  alignVariant: "left" | "center" | "right";
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionLogos = {
  _type: "section.logos";
  items: Array<
    {
      _key: string;
    } & LogoItem
  >;
  alignVariant: "left" | "center" | "right";
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SectionCopy = {
  _type: "section.copy";
  columns: Array<
    {
      _key: string;
    } & CustomRichText
  >;
  isReversedOnMobile: boolean;
  marginTop: "none" | "base" | "lg";
  marginBottom: "none" | "base" | "lg";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "light" | "light-gray" | "dark-gray" | "dark" | "none";
  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type StepGuideItem = {
  _type: "stepGuideItem";
  number: string;
  text: string;
  image: CustomImage;
};

export type PricingTableTier = {
  _type: "pricingTableTier";
  name: string;
  icon: CustomImage;
  price?: number;
  description: string;
  features: Array<string>;
  link: CustomLink;
  popular?: boolean;
};

export type CarouselCard = {
  _type: "carouselCard";
  text?: CustomRichText;
  image: CustomImage;
};

export type BlogSectionPost = {
  _type: "blogSection.post";
  date?: string;
  link?: CustomLink;
  image?: CustomImage;
  text?: CustomRichText;
};

export type BasicRichText = {
  _type: "basicRichText";
  text?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?:
          | "normal"
          | "h1"
          | "h2"
          | "h3"
          | "h4"
          | "h5"
          | "h6"
          | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
          | ({
              _key: string;
            } & TextColor)
          | ({
              _key: string;
            } & HighlightColor)
        >;
        level?: number;
        _type: "block";
        _key: string;
      }
    | ({
        _key: string;
      } & Break)
  >;
  alignVariant: "left" | "center" | "right";
  removeInnerMargins: boolean;
};

export type Break = {
  _type: "break";
  style?: "line";
};

export type DefaultCard = {
  _type: "defaultCard";
  title: string;
  description: string;
  style:
    | "icon-left"
    | "icon-left-with-background"
    | "icon-title-inline"
    | "icon-top"
    | "no-icon"
    | "icon-left-separate-title";
  link?: CustomLink;
  image?: CustomImage;
};

export type LogoItem = {
  _type: "logoItem";
  type?: "logo" | "clickableLogo";
  image?: CustomImage;
  link?: CustomLink;
};

export type CustomLink = {
  _type: "customLink";
  text: string;
  type: "url" | "internal";
  href?: string;
  target: "_self" | "_blank" | "_parent" | "_top";
  url?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
  variant:
    | "default"
    | "primary"
    | "secondary"
    | "headerNav"
    | "footerNav"
    | "badge"
    | "ghost"
    | "ghost-dark";
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  theme: "light" | "dark";
  title?: string;
  pathname?: Slug;
  header: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "header";
  };
  sectionsBody?: Array<
    | ({
        _key: string;
      } & SectionCopy)
    | ({
        _key: string;
      } & SectionLogos)
    | ({
        _key: string;
      } & SectionLinksList)
    | ({
        _key: string;
      } & SectionCardsGrid)
    | ({
        _key: string;
      } & SectionBlog)
    | ({
        _key: string;
      } & SectionCarousel)
    | ({
        _key: string;
      } & SectionHero)
    | ({
        _key: string;
      } & SectionPricingTable)
    | ({
        _key: string;
      } & SectionStepGuide)
    | ({
        _key: string;
      } & SectionThreeDElement)
  >;
  footer: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "footer";
  };
  seoTitle?: string;
  seoDescription?: string;
  showCookieBanner?: boolean;
  robots?: "index" | "no-index";
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  };
};

export type Footer = {
  _id: string;
  _type: "footer";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: CustomImage;
  text?: CustomRichText;
  links?: Array<
    {
      _key: string;
    } & CustomLink
  >;
  copywriteText?: string;
};

export type CustomRichText = {
  _type: "customRichText";
  text?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?:
          | "normal"
          | "h1"
          | "h2"
          | "h3"
          | "h4"
          | "h5"
          | "h6"
          | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
          | ({
              _key: string;
            } & TextColor)
          | ({
              _key: string;
            } & HighlightColor)
        >;
        level?: number;
        _type: "block";
        _key: string;
      }
    | ({
        _key: string;
      } & Break)
    | ({
        _key: string;
      } & CustomImage)
    | ({
        _key: string;
      } & SectionLogos)
    | ({
        _key: string;
      } & SectionCardsGrid)
    | ({
        _key: string;
      } & SectionLinksList)
  >;
  alignVariant: "left" | "center" | "right";
  removeInnerMargins: boolean;
};

export type Header = {
  _id: string;
  _type: "header";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: CustomImage;
  links: Array<
    {
      _key: string;
    } & CustomLink
  >;
  alignVariant: "left" | "center" | "right";
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type CustomImage = {
  _type: "customImage";
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  };
  height: number;
  aspectRatio:
    | "16/9"
    | "3/2"
    | "4/3"
    | "1/1"
    | "9/16"
    | "1/2"
    | "4/1"
    | "3/1"
    | "auto";
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type HighlightColor = {
  _type: "highlightColor";
  label?: string;
  value?: string;
};

export type TextColor = {
  _type: "textColor";
  label?: string;
  value?: string;
};

export type SimplerColor = {
  _type: "simplerColor";
  label?: string;
  value?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | SectionThreeDElement
  | SectionStepGuide
  | SectionPricingTable
  | SectionHero
  | SectionCarousel
  | SectionBlog
  | SectionCardsGrid
  | SectionLinksList
  | SectionLogos
  | SectionCopy
  | StepGuideItem
  | PricingTableTier
  | CarouselCard
  | BlogSectionPost
  | BasicRichText
  | Break
  | DefaultCard
  | LogoItem
  | CustomLink
  | Page
  | Footer
  | CustomRichText
  | Header
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | CustomImage
  | Slug
  | HighlightColor
  | TextColor
  | SimplerColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/lib/api/queries.ts
// Variable: PAGE_BY_SLUG_QUERY
// Query:   *[_type == "page" && pathname.current == $slug][0] {    _id,    header->{        ...,  links[] {    ...,type == "internal" => {  url->{    _type == "page" => {      "slug": [pathname.current],    },  },}  }    },    sectionsBody[] {      ...,      _type == "section.hero" => {   ...,  links[] {    ...,type == "internal" => {  url->{    _type == "page" => {      "slug": [pathname.current],    },  },}  } },      _type == "section.linksList" => {   ...,  links[] {    ...,type == "internal" => {  url->{    _type == "page" => {      "slug": [pathname.current],    },  },}  } },      _type == "section.cardsGrid" => {   ...,  items[] {    ...,    link {      ...,type == "internal" => {  url->{    _type == "page" => {      "slug": [pathname.current],    },  },}    }  } },      _type == "section.logos" => {   ...,  items[] {    ...,    link {      ...,type == "internal" => {  url->{    _type == "page" => {      "slug": [pathname.current],    },  },}    }  } },      _type == "section.blog" => {   ...,  posts[] {    ...,    link {      ...,type == "internal" => {  url->{    _type == "page" => {      "slug": [pathname.current],    },  },}    }  } },    },    footer->{        ...,  links[] {    ...,type == "internal" => {  url->{    _type == "page" => {      "slug": [pathname.current],    },  },}  }    },    title,    "slug": pathname.current,    seoTitle,    seoDescription,    ogImage,    robots,    theme,  }
export type PAGE_BY_SLUG_QUERYResult = {
  _id: string;
  header: {
    _id: string;
    _type: "header";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    image?: CustomImage;
    links: Array<{
      _key: string;
      _type: "customLink";
      text: string;
      type: "internal" | "url";
      href?: string;
      target: "_blank" | "_parent" | "_self" | "_top";
      url: {
        slug: Array<string | null>;
      } | null;
      variant:
        | "badge"
        | "default"
        | "footerNav"
        | "ghost-dark"
        | "ghost"
        | "headerNav"
        | "primary"
        | "secondary";
    }>;
    alignVariant: "center" | "left" | "right";
  };
  sectionsBody: Array<
    | {
        _key: string;
        _type: "section.blog";
        text: CustomRichText;
        style:
          | "three-column-with-background-images"
          | "three-column-with-images"
          | "three-column";
        posts: Array<{
          _key: string;
          _type: "blogSection.post";
          date?: string;
          link: {
            _type: "customLink";
            text: string;
            type: "internal" | "url";
            href?: string;
            target: "_blank" | "_parent" | "_self" | "_top";
            url: {
              slug: Array<string | null>;
            } | null;
            variant:
              | "badge"
              | "default"
              | "footerNav"
              | "ghost-dark"
              | "ghost"
              | "headerNav"
              | "primary"
              | "secondary";
          } | null;
          image?: CustomImage;
          text?: CustomRichText;
        }>;
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.cardsGrid";
        columns: 1 | 2 | 3;
        items: Array<{
          _key: string;
          _type: "defaultCard";
          title: string;
          description: string;
          style:
            | "icon-left-separate-title"
            | "icon-left-with-background"
            | "icon-left"
            | "icon-title-inline"
            | "icon-top"
            | "no-icon";
          link: {
            _type: "customLink";
            text: string;
            type: "internal" | "url";
            href?: string;
            target: "_blank" | "_parent" | "_self" | "_top";
            url: {
              slug: Array<string | null>;
            } | null;
            variant:
              | "badge"
              | "default"
              | "footerNav"
              | "ghost-dark"
              | "ghost"
              | "headerNav"
              | "primary"
              | "secondary";
          } | null;
          image?: CustomImage;
        }>;
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.carousel";
        slidesPerView: number;
        slides: Array<
          {
            _key: string;
          } & CarouselCard
        >;
        effect: "cards" | "coverflow" | "cube" | "fade" | "flip" | "slide";
        loop?: boolean;
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.copy";
        columns: Array<
          {
            _key: string;
          } & CustomRichText
        >;
        isReversedOnMobile: boolean;
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.hero";
        title: string;
        text?: CustomRichText;
        image?: CustomImage;
        links: Array<{
          _key: string;
          _type: "customLink";
          text: string;
          type: "internal" | "url";
          href?: string;
          target: "_blank" | "_parent" | "_self" | "_top";
          url: {
            slug: Array<string | null>;
          } | null;
          variant:
            | "badge"
            | "default"
            | "footerNav"
            | "ghost-dark"
            | "ghost"
            | "headerNav"
            | "primary"
            | "secondary";
        }>;
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.linksList";
        links: Array<{
          _key: string;
          _type: "customLink";
          text: string;
          type: "internal" | "url";
          href?: string;
          target: "_blank" | "_parent" | "_self" | "_top";
          url: {
            slug: Array<string | null>;
          } | null;
          variant:
            | "badge"
            | "default"
            | "footerNav"
            | "ghost-dark"
            | "ghost"
            | "headerNav"
            | "primary"
            | "secondary";
        }>;
        alignVariant: "center" | "left" | "right";
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.logos";
        items: Array<{
          _key: string;
          _type: "logoItem";
          type?: "clickableLogo" | "logo";
          image?: CustomImage;
          link: {
            _type: "customLink";
            text: string;
            type: "internal" | "url";
            href?: string;
            target: "_blank" | "_parent" | "_self" | "_top";
            url: {
              slug: Array<string | null>;
            } | null;
            variant:
              | "badge"
              | "default"
              | "footerNav"
              | "ghost-dark"
              | "ghost"
              | "headerNav"
              | "primary"
              | "secondary";
          } | null;
        }>;
        alignVariant: "center" | "left" | "right";
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.pricingTable";
        tiers: Array<
          {
            _key: string;
          } & PricingTableTier
        >;
        yearlyDiscountPercentage: number;
        extraServiceEnabled?: boolean;
        extraService?: {
          text: string;
          cost: number;
        };
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.stepGuide";
        items: Array<
          {
            _key: string;
          } & StepGuideItem
        >;
        link: CustomLink;
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
    | {
        _key: string;
        _type: "section.threeDElement";
        model: "donut" | "globe" | "kubik-rubik";
        marginTop: "base" | "lg" | "none";
        marginBottom: "base" | "lg" | "none";
        maxWidth: "base" | "none" | "small";
        backgroundColor: "dark-gray" | "dark" | "light-gray" | "light" | "none";
        backgroundImage?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      }
  > | null;
  footer: {
    _id: string;
    _type: "footer";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    image?: CustomImage;
    text?: CustomRichText;
    links: Array<{
      _key: string;
      _type: "customLink";
      text: string;
      type: "internal" | "url";
      href?: string;
      target: "_blank" | "_parent" | "_self" | "_top";
      url: {
        slug: Array<string | null>;
      } | null;
      variant:
        | "badge"
        | "default"
        | "footerNav"
        | "ghost-dark"
        | "ghost"
        | "headerNav"
        | "primary"
        | "secondary";
    }> | null;
    copywriteText?: string;
  };
  title: string | null;
  slug: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  ogImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  } | null;
  robots: "index" | "no-index" | null;
  theme: "dark" | "light";
} | null;
