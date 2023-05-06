// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Footer documents */
interface FooterDocumentData {
  /**
   * credits field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.credits
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  credits: prismicT.KeyTextField;
  /**
   * Linkedin Link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.linkedinLink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  linkedinLink: prismicT.LinkField;
  /**
   * Github Link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.githubLink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  githubLink: prismicT.LinkField;
  /**
   * Instagram Link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.instagramLink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  instagramLink: prismicT.LinkField;
}
/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;
/** Content for Home documents */
interface HomeDocumentData {
  /**
   * Home(title) field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Avatar Dark field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.avatarDark
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  avatarDark: prismicT.ImageField<never>;
  /**
   * Avatar Light field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.avatarLight
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  avatarLight: prismicT.ImageField<never>;
  /**
   * Name Heading field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.nameHeading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  nameHeading: prismicT.KeyTextField;
  /**
   * Expertise field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Text to inform the specialty area
   * - **API ID Path**: home.expertise
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  expertise: prismicT.KeyTextField;
  /**
   * Description field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text description about us
   * - **API ID Path**: home.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Curriculum field in *Home*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: Resume PDF document
   * - **API ID Path**: home.curriculum
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  curriculum: prismicT.LinkToMediaField;
  /**
   * Project field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.project[]
   * - **Tab**: ProjectsCard
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  project: prismicT.GroupField<Simplify<HomeDocumentDataProjectItem>>;
  /**
   * SEO Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.seoTitle
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  seoTitle: prismicT.KeyTextField;
  /**
   * SEO Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.seoDescription
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  seoDescription: prismicT.KeyTextField;
  /**
   * Image Preview field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.imagePreview
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imagePreview: prismicT.ImageField<never>;
}
/**
 * Item in Home → Project
 *
 */
export interface HomeDocumentDataProjectItem {
  /**
   * Title field in *Home → Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.project[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Image field in *Home → Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.project[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * TechStack field in *Home → Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Name of the tool or technology used
   * - **API ID Path**: home.project[].techstack
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  techstack: prismicT.RichTextField;
  /**
   * Github Link field in *Home → Project*
   *
   * - **Field Type**: Link
   * - **Placeholder**: project repository link
   * - **API ID Path**: home.project[].githubLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  githubLink: prismicT.LinkField;
  /**
   * Deploy Link field in *Home → Project*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home.project[].deployLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  deployLink: prismicT.LinkField;
}
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Menu documents */
interface MenuDocumentData {
  /**
   * About field in *Menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  about: prismicT.KeyTextField;
  /**
   * Posts field in *Menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.posts
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  posts: prismicT.KeyTextField;
  /**
   * Connect field in *Menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.connect
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  connect: prismicT.KeyTextField;
  /**
   * Form Title field in *Menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.form_title
   * - **Tab**: Form
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  form_title: prismicT.KeyTextField;
  /**
   * Submit field in *Menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.submit
   * - **Tab**: Form
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  submit: prismicT.KeyTextField;
  /**
   * Input field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.input[]
   * - **Tab**: Form
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  input: prismicT.GroupField<Simplify<MenuDocumentDataInputItem>>;
  /**
   * Slice Zone field in *Menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.slices1[]
   * - **Tab**: Form
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices1: prismicT.SliceZone<MenuDocumentDataSlices1Slice>;
}
/**
 * Item in Menu → Input
 *
 */
export interface MenuDocumentDataInputItem {
  /**
   * Label field in *Menu → Input*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.input[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismicT.KeyTextField;
  /**
   * Placeholder field in *Menu → Input*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.input[].placeholder
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  placeholder: prismicT.KeyTextField;
  /**
   * Required Message field in *Menu → Input*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.input[].required_msg
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  required_msg: prismicT.KeyTextField;
  /**
   * Max Length Message field in *Menu → Input*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.input[].max_msg
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  max_msg: prismicT.KeyTextField;
  /**
   * Min Length Message field in *Menu → Input*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.input[].min_msg
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  min_msg: prismicT.KeyTextField;
  /**
   * Pattern Message field in *Menu → Input*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.input[].pattern_msg
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  pattern_msg: prismicT.KeyTextField;
}
/**
 * Slice for *Menu → Slice Zone*
 *
 */
type MenuDocumentDataSlices1Slice = never;
/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<MenuDocumentData>, "menu", Lang>;
/** Content for Post documents */
interface PostDocumentData {
  /**
   * Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Description field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<PostDocumentDataSlicesSlice>;
  /**
   * SEO Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.seo_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  seo_title: prismicT.KeyTextField;
  /**
   * SEO Description field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.seo_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  seo_description: prismicT.KeyTextField;
  /**
   * Image Preview field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.image_preview
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_preview: prismicT.ImageField<never>;
}
/**
 * Slice for *Post → Slice Zone*
 *
 */
type PostDocumentDataSlicesSlice = CodeSandboxSlice;
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
/** Content for PostIndex documents */
interface PostindexDocumentData {
  /**
   * title field in *PostIndex*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: postindex.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * SEO Title field in *PostIndex*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: postindex.seo_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  seo_title: prismicT.KeyTextField;
  /**
   * SEO Description field in *PostIndex*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: postindex.seo_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  seo_description: prismicT.KeyTextField;
  /**
   * Image Preview field in *PostIndex*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: postindex.image_preview
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_preview: prismicT.ImageField<never>;
}
/**
 * PostIndex document from Prismic
 *
 * - **API ID**: `postindex`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostindexDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<PostindexDocumentData>,
    "postindex",
    Lang
  >;
export type AllDocumentTypes =
  | FooterDocument
  | HomeDocument
  | MenuDocument
  | PostDocument
  | PostindexDocument;
/**
 * Primary content in CodeSandbox → Primary
 *
 */
interface CodeSandboxSliceDefaultPrimary {
  /**
   * Title Code Example field in *CodeSandbox → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: code_sandbox.primary.title_code_example
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title_code_example: prismicT.KeyTextField;
  /**
   * Code Example field in *CodeSandbox → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: code_sandbox.primary.code_example
   * - **Documentation**: https://prismic.io/docs/core-concepts/embed
   *
   */
  code_example: prismicT.EmbedField;
}
/**
 * Default variation for CodeSandbox Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CodeSandboxSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<CodeSandboxSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *CodeSandbox*
 *
 */
type CodeSandboxSliceVariation = CodeSandboxSliceDefault;
/**
 * CodeSandbox Shared Slice
 *
 * - **API ID**: `code_sandbox`
 * - **Description**: `CodeSandbox`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CodeSandboxSlice = prismicT.SharedSlice<
  "code_sandbox",
  CodeSandboxSliceVariation
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
      FooterDocumentData,
      FooterDocument,
      HomeDocumentData,
      HomeDocumentDataProjectItem,
      HomeDocument,
      MenuDocumentData,
      MenuDocumentDataInputItem,
      MenuDocumentDataSlices1Slice,
      MenuDocument,
      PostDocumentData,
      PostDocumentDataSlicesSlice,
      PostDocument,
      PostindexDocumentData,
      PostindexDocument,
      AllDocumentTypes,
      CodeSandboxSliceDefaultPrimary,
      CodeSandboxSliceDefault,
      CodeSandboxSliceVariation,
      CodeSandboxSlice,
    };
  }
}