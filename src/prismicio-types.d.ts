// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BookDocumentDataSlicesSlice = MembersSlice;

/**
 * Content for book documents
 */
interface BookDocumentData {
  /**
   * title field in *book*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: book.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * content field in *book*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: book.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Slice Zone field in *book*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: book.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BookDocumentDataSlicesSlice>;
}

/**
 * book document from Prismic
 *
 * - **API ID**: `book`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BookDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BookDocumentData>, "book", Lang>;

/**
 * Item in *home → boeken*
 */
export interface HomeDocumentDataBoekenItem {}

type HomeDocumentDataSlicesSlice = BoekenSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * title field in *home*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * content field in *home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * boeken field in *home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.boeken[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  boeken: prismic.GroupField<Simplify<HomeDocumentDataBoekenItem>>;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *yearbook → members*
 */
export interface YearbookDocumentDataMembersItem {}

type YearbookDocumentDataSlicesSlice = MembersSlice;

/**
 * Content for yearbook documents
 */
interface YearbookDocumentData {
  /**
   * title field in *yearbook*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: yearbook.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * content field in *yearbook*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: yearbook.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * members field in *yearbook*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: yearbook.members[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  members: prismic.GroupField<Simplify<YearbookDocumentDataMembersItem>>;

  /**
   * Slice Zone field in *yearbook*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: yearbook.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<YearbookDocumentDataSlicesSlice>
  /**
   * Meta Description field in *yearbook*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: yearbook.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *yearbook*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: yearbook.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *yearbook*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: yearbook.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * yearbook document from Prismic
 *
 * - **API ID**: `yearbook`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type YearbookDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<YearbookDocumentData>,
    "yearbook",
    Lang
  >;

export type AllDocumentTypes = BookDocument | HomeDocument | YearbookDocument;

/**
 * Primary content in *Boeken → Items*
 */
export interface BoekenSliceDefaultItem {
  /**
   * title field in *Boeken → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: boeken.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * color field in *Boeken → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: boeken.items[].color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  color: prismic.SelectField<
    "red" | "blue" | "green" | "yellow" | "purple" | "brown"
  >;

  /**
   * slug field in *Boeken → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: boeken.items[].slug
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  slug: prismic.RichTextField;
}

/**
 * Default variation for Boeken Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoekenSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<BoekenSliceDefaultItem>
>;

/**
 * Slice variation for *Boeken*
 */
type BoekenSliceVariation = BoekenSliceDefault;

/**
 * Boeken Shared Slice
 *
 * - **API ID**: `boeken`
 * - **Description**: Boeken
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoekenSlice = prismic.SharedSlice<"boeken", BoekenSliceVariation>;

/**
 * Primary content in *Members → Items*
 */
export interface MembersSliceDefaultItem {
  /**
   * name field in *Members → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: members.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * url field in *Members → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: members.items[].url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * role field in *Members → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: members.items[].role
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  role: prismic.RichTextField;
}

/**
 * Default variation for Members Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MembersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<MembersSliceDefaultItem>
>;

/**
 * Slice variation for *Members*
 */
type MembersSliceVariation = MembersSliceDefault;

/**
 * Members Shared Slice
 *
 * - **API ID**: `members`
 * - **Description**: Members
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MembersSlice = prismic.SharedSlice<
  "members",
  MembersSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BookDocument,
      BookDocumentData,
      BookDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataBoekenItem,
      HomeDocumentDataSlicesSlice,
      YearbookDocument,
      YearbookDocumentData,
      YearbookDocumentDataMembersItem,
      YearbookDocumentDataSlicesSlice,
      AllDocumentTypes,
      BoekenSlice,
      BoekenSliceDefaultItem,
      BoekenSliceVariation,
      BoekenSliceDefault,
      MembersSlice,
      MembersSliceDefaultItem,
      MembersSliceVariation,
      MembersSliceDefault,
    };
  }
}
