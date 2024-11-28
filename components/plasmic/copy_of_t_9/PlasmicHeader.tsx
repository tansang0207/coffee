// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hPWcLUPYEAQCx68W2M99up
// Component: VqJkHSpfsMA-

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Cart from "../../Cart"; // plasmic-import: VN-_cm44BWxe/component

import { useScreenVariants as useScreenVariants_1Mv16YNowK28 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 1MV16YNowK28/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../t_9_imported_dep_4/plasmic.module.css"; // plasmic-import: rJmrvZ8rTbZpYCx9aXq6iH/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: hPWcLUPYEAQCx68W2M99up/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: VqJkHSpfsMA-/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: G7VTO1oIY5Ol/icon
import _2561381SearchIconsvgIcon from "./icons/PlasmicIcon___2561381SearchIconsvg"; // plasmic-import: I2m-uHW39QkD/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 7QjlkweO-RrC/icon

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: Flex__<"div">;
  cart?: Flex__<typeof Cart>;
  button?: Flex__<"button">;
};

export interface DefaultHeaderProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_1Mv16YNowK28()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__kyYe)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__dbOx)}
        >
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__z883I
            )}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            {"Logo"}
          </PlasmicLink__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__dXyvl)}
          >
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__eyDzD
              )}
              component={Link}
              href={`/shop`}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__v0Raj)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lOTf
                )}
              >
                {"E-shop"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__sycm)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__ykqnT
              )}
              component={Link}
              href={`/academy`}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__tiiFc)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uCpPx
                )}
              >
                {"The Academy"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__wi1M0)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__fTx4
              )}
              component={Link}
              href={`/about`}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__yMJo3)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__llJm4
                )}
              >
                {"About"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__qRxSk)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__cg3Tt
              )}
              component={Link}
              href={`/help`}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__tjzS)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jy55K
                )}
              >
                {"Help"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__ijMts)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___2Naxk)}
          >
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__kdnc8
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__rgHf)}
                  role={"img"}
                />
              ) : null}
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kDyfH)}
              >
                <_2561381SearchIconsvgIcon
                  className={classNames(projectcss.all, sty.svg__thac1)}
                  role={"img"}
                />

                <Icon2Icon
                  className={classNames(projectcss.all, sty.svg__ssoQe)}
                  role={"img"}
                />

                <Cart
                  data-plasmic-name={"cart"}
                  data-plasmic-override={overrides.cart}
                  className={classNames("__wab_instance", sty.cart)}
                />
              </Stack__>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__lbf0X)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
          {false ? (
            <div className={classNames(projectcss.all, sty.freeBox__fsXzG)}>
              <button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.button
                )}
              >
                {"Sign up"}
              </button>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__iX5Iw
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__ukGt)}
                    role={"img"}
                  />
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__loedG
                  )}
                >
                  {"Log in"}
                </div>
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__sL9Xj)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
            </div>
          ) : null}
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cart", "button"],
  cart: ["cart"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  cart: typeof Cart;
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cart: makeNodeComponent("cart"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
