// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hPWcLUPYEAQCx68W2M99up
// Component: Y8VP7NLZke5O

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

import Header from "../../Header"; // plasmic-import: VqJkHSpfsMA-/component
import TextInput from "../../TextInput"; // plasmic-import: kbPkSE6WXfXQ/component
import Button from "../../Button"; // plasmic-import: FmwlxDiCew1-/component

import { useScreenVariants as useScreenVariants_1Mv16YNowK28 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 1MV16YNowK28/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../t_9_imported_dep_4/plasmic.module.css"; // plasmic-import: rJmrvZ8rTbZpYCx9aXq6iH/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: hPWcLUPYEAQCx68W2M99up/projectcss
import sty from "./PlasmicAbout.module.css"; // plasmic-import: Y8VP7NLZke5O/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: G7VTO1oIY5Ol/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: jacFiCA7aQEv/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: LENB83d6V84j/icon
import AngleRightsvgIcon from "./icons/PlasmicIcon__AngleRightsvg"; // plasmic-import: gd_fLC7pkVmg/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: Xznpl4WmsyWl/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 7QjlkweO-RrC/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: F6PGrp-g60YA/icon

createPlasmicElementProxy;

export type PlasmicAbout__VariantMembers = {};
export type PlasmicAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbout__VariantsArgs;
export const PlasmicAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicAbout__ArgsType = {};
type ArgPropType = keyof PlasmicAbout__ArgsType;
export const PlasmicAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicAbout__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  _2?: Flex__<"a"> & Partial<LinkProps>;
  textInput?: Flex__<typeof TextInput>;
};

export interface DefaultAboutProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs;
  args: PlasmicAbout__ArgsType;
  overrides: PlasmicAbout__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_1Mv16YNowK28()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
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
            className={classNames(projectcss.all, sty.freeBox__wfPbr)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___8Fv9H)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iPQie)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3F7K
                  )}
                >
                  {"Get 55% off Lorem Ipsum enough lorem discount"}
                </div>
              </Stack__>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__ebqFx)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button___9EqY
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
                      sty.link___5Awn2
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__yuGqA)}
                        role={"img"}
                      />
                    ) : null}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ntkWb
                      )}
                    >
                      {"Log in"}
                    </div>
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__cANc)}
                        role={"img"}
                      />
                    ) : null}
                  </Stack__>
                </div>
              ) : null}
            </Stack__>
          </Stack__>
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__t7Bc)}>
            <div className={classNames(projectcss.all, sty.freeBox__t3Inu)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ltr7W)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mhCkT)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__fOpoG
                    )}
                  >
                    {"Making a difference"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cpGg6
                    )}
                  >
                    {
                      "High standards and ethically sourced, we're changing the world \none bean at a time."
                    }
                  </div>
                </Stack__>
              </Stack__>
              <div className={classNames(projectcss.all, sty.columns__oupkZ)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__umZb)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__pHx0
                    )}
                  >
                    {"In the heart of the bay"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ycix
                    )}
                  >
                    {
                      "In the beautiful San Francisco bay, our caf\u00e9 is visited by locals and tourists from all over the world. We started off as a small roaster with a few seats. Over the years, we expanded into the outlet with over 100 seats and beautiful outside lounge area.\n"
                    }
                  </div>
                </Stack__>
                <div className={classNames(projectcss.all, sty.column__l6EV)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___1VRze)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/copy_of_t_9/images/priscillaDuPreezELnxUdFs6EcUnsplashjpg.jpg",
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__iOthg)}>
            <div className={classNames(projectcss.all, sty.freeBox__x2Xrp)}>
              <div className={classNames(projectcss.all, sty.columns__uUu44)}>
                <div className={classNames(projectcss.all, sty.column__gtWqv)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__jliyG)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/copy_of_t_9/images/mikeKenneallyTNaLoIZhqVmUnsplash1Jpg.jpg",
                      fullWidth: 1920,
                      fullHeight: 1260,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column___93Zx0)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__f1GuZ
                    )}
                  >
                    {"Roasting and wholesale"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kgj6B
                    )}
                  >
                    {
                      "We're obsessed about producing great coffee and sharing it with the world. We roast weekly and hold many tasting events. Come learn about the process and try out our different blends."
                    }
                  </div>
                </Stack__>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__c1Agc)}>
            <div className={classNames(projectcss.all, sty.freeBox__hGdRc)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__g1Yn)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__iFfd3)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__fLarw
                    )}
                  >
                    {"The journey"}
                  </h2>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__hBt0P)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kaszD
                      )}
                    >
                      {
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
                      }
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </div>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hgiLp)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__p7Kh)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__aXu4P)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__h1DoN)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__kdfca
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Lorem founders"
                      : "Lorem founders"}
                  </h2>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__it2N)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___4Jq2M)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/copy_of_t_9/images/istockphoto1264694710170667Ajpg.jpg",
                    fullWidth: 553,
                    fullHeight: 311,
                    aspectRatio: undefined
                  }}
                />
              </Stack__>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6Je7Z)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ty76J)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wsavp)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__xpliy)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lNdQf
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Contact us\n"
                      : "Contact us\n"}
                  </div>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___6X4M8
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "(555) 555-5555"
                      : "(555) 555-5555"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__tVqfy
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {"support@example.com"}
                  </PlasmicLink__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xB4J)}
              >
                <PlasmicLink__
                  data-plasmic-name={"_2"}
                  data-plasmic-override={overrides._2}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty._2
                  )}
                  component={Link}
                  href={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "#"
                      : `/shop`
                  }
                  platform={"nextjs"}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Shop"
                    : "Shop"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__kRlq
                  )}
                  component={Link}
                  href={`/academy`}
                  platform={"nextjs"}
                >
                  {"The Academy"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__t2HvM
                  )}
                  component={Link}
                  href={`/about`}
                  platform={"nextjs"}
                >
                  {"About"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___9G5XZ
                  )}
                  component={Link}
                  href={`/help`}
                  platform={"nextjs"}
                >
                  {"Help"}
                </PlasmicLink__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___24Zgd)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fiUbJ
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Email newsletter"
                    : "Email newsletter"}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__brocp)}>
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    endIcon={
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__qftT
                        )}
                        submitsForm={true}
                      >
                        <AngleRightsvgIcon
                          className={classNames(projectcss.all, sty.svg__bYW)}
                          role={"img"}
                        />
                      </Button>
                    }
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["textInput", "value"])(
                        (e => e.target?.value).apply(null, eventArgs)
                      );
                    }}
                    placeholder={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "E-mail"
                        : "E-mail"
                    }
                    showEndIcon={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    }
                    value={
                      generateStateValueProp($state, ["textInput", "value"]) ??
                      ""
                    }
                  />
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lnLDd)}
              >
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ePxyu
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg___1ECgb)}
                      role={"img"}
                    />
                  ) : null}
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dTnsF)}
                  >
                    <PlasmicIcon__
                      PlasmicIconType={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? Icon3Icon
                          : Icon3Icon
                      }
                      className={classNames(projectcss.all, sty.svg__shZr8)}
                      role={"img"}
                    />

                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg___62EkF)}
                      role={"img"}
                    />

                    <PlasmicIcon__
                      PlasmicIconType={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? Icon28Icon
                          : Icon28Icon
                      }
                      className={classNames(projectcss.all, sty.svg__z7AR)}
                      role={"img"}
                    />
                  </Stack__>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__jPak5)}
                      role={"img"}
                    />
                  ) : null}
                </Stack__>
              </Stack__>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__hmCO)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button___6WzQy
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
                      sty.link__p1P8N
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg___7WSvU)}
                        role={"img"}
                      />
                    ) : null}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___74Iby
                      )}
                    >
                      {"Log in"}
                    </div>
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__ueksT)}
                        role={"img"}
                      />
                    ) : null}
                  </Stack__>
                </div>
              ) : null}
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox__xXBd8)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___4Y60)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qSuhn)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__aUbtf)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lCh0L
                      )}
                    >
                      {"\u00a9 Company. All rights reserved."}
                    </div>
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___6HDvD)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___51Lek)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__viX9E)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___7X65K
                        )}
                      >
                        <Stack__
                          as={PlasmicLink__}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__nFyl4
                          )}
                          component={Link}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/shipping`
                              : `/shipping`
                          }
                          platform={"nextjs"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__ryAfB
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__bI1T
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "shop"
                              : "Shipping & Returns"}
                          </div>
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___6GKz
                              )}
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
                            sty.link__k4OPx
                          )}
                          component={Link}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/privacypolicy`
                              : `/privacypolicy`
                          }
                          platform={"nextjs"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__jRvgN
                              )}
                              role={"img"}
                            />
                          ) : null}
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__evMof
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qih1A
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "Privacy policy"
                              : "Privacy policy"}
                          </div>
                        </Stack__>
                        <Stack__
                          as={PlasmicLink__}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__s1RFf
                          )}
                          component={Link}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/terms`
                              : `/terms`
                          }
                          platform={"nextjs"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___0Rvpk
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___00QY
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "Terms & Conditions"
                              : "Terms & Conditions"}
                          </div>
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__oAs0X
                              )}
                              role={"img"}
                            />
                          ) : null}
                        </Stack__>
                      </Stack__>
                    </Stack__>
                  </Stack__>
                </Stack__>
              </Stack__>
            </div>
          </Stack__>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "_2", "textInput"],
  header: ["header"],
  _2: ["_2"],
  textInput: ["textInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  _2: "a";
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbout__VariantsArgs;
    args?: PlasmicAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAbout__ArgsType,
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
          internalArgPropNames: PlasmicAbout__ArgProps,
          internalVariantPropNames: PlasmicAbout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    _2: makeNodeComponent("_2"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */