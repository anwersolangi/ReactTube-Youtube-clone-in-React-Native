import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import RenderHTML, {defaultSystemFonts} from 'react-native-render-html';
import {ScrollView} from 'react-native-gesture-handler';

const AboutUs = props => {
  const {width} = useWindowDimensions();
  const source = {
    html: `<div
  style="
    box-sizing: border-box;
    width: ${width}px;
    flex-grow: 1;
    margin-right: 20px;
    overflow: hidden;
    background-color: #ffffff;
    color: #333333;">
  <main style="box-sizing: border-box; background: ">
    <section
      style="
        box-sizing: border-box;
        position: relative;
        margin-right: 20px;
        align-self: center;
        border-color: #e8e8e8;
      "
      data-hide-row=" uvc_hidden-lg  uvc_hidden-ml  uvc_hidden-md "
      data-rtl="false"
      data-row-effect-mobile-disable="true"
      data-img-parallax-mobile-disable="true"
    >
                          <img
                          style="
                          max-width: 300;
                          border-radius: inherit;
                            object-fit: contain;
                            "
                          src="https://www.nativebrains.com/storage/2020/12/about-avatar.png"
                          width="auto"
                          height="250"
                          loading="lazy"
                        />
                
    </section>
    <section
      style="
        box-sizing: border-box;
        position: relative;
        margin-right: 20px;
        border-color: #e8e8e8;
      "
      data-hide-row=" uvc_hidden-lg  uvc_hidden-ml  uvc_hidden-md "
      data-rtl="false"
      data-row-effect-mobile-disable="true"
    >
      <div
        style="
          box-sizing: border-box;
          overflow: hidden;
          width: ${width}px;
          background-position: center center;
          inset: 0px;
          z-index: 0;
        " data-bg-override="0">
        &nbsp;
      </div>
        <div
          class="g-cols vc_row type_default valign_top"
          style="
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            margin: 0px -1.5rem;
          ">
          <div
            class="vc_col-sm-12 wpb_column vc_column_container"
            style="
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              position: relative;
              border-color: #e8e8e8;
              width: ${width - 10}px;
              margin: 0px 10px 0px 0px;
            ">
            <div style="
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                flex-shrink: 0;
                border-color: #e8e8e8;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
              ">
              <div class="wpb_wrapper" style="box-sizing: border-box">
                <div
                  class="wpb_text_column"
                  style="box-sizing: border-box; margin-bottom: 1.5rem">
                  <div class="wpb_wrapper" style="box-sizing: border-box">
                    <h1 style="
                        box-sizing: border-box;
                        font-family: Touche_nb, sans-serif;
                        line-height: 1.2;
                        margin: 0px 20px 0px 0px;
                        padding-top: 0px;
                        font-weight: 100;
                        font-size: 35px !important;
                        letter-spacing: 0px;
                        color: #b42cf5;
                      ">
                      <strong style="box-sizing: border-box">CODE LOVER!</strong>
                    </h1>
                  </div>
                </div>
                <div style="box-sizing: border-box">
                  <div style="box-sizing: border-box">
                    <p style="box-sizing: border-box; margin: 0px 20px 0px 0px ">
                      I am a code lover/programmer from
                      Karachi, Sindh, Pakistan. and i love to provide apps and
                      webs solution to enterprise or individuals!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section
      style="
        box-sizing: border-box;
        position: relative;
        margin-right: 20px;
        border-color: #e8e8e8;
      "
    >
      <div style="box-sizing: border-box">
                <div
                  style="
                    box-sizing: border-box;
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;
                    margin: 0px -1.5rem;
                  "
                >
                  <div
                    style="
                      box-sizing: border-box;
                      display: flex;
                      flex-direction: column;
                      position: relative;
                      border-color: #e8e8e8;
                      width: 483.2px;
                      margin: 0px 0px 1.5rem;
                    "
                  >
                    <div
                    
                      style="
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                        flex-shrink: 0;
                        border-color: #e8e8e8;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                        justify-content: center;
                      "
                    >
                      <div style="box-sizing: border-box">
                        <div
                          style="
                            box-sizing: border-box;
                            text-align: center;
                            border-color: #e8e8e8;
                            max-width: 100%;
                          "
                        >
                          <div
                            style="
                              box-sizing: border-box;
                              border-radius: inherit;
                              background: inherit;
                              border-color: inherit !important;
                              color: inherit !important;
                            "
                          >
                            <img
                            style="max-width: ${width}px;"
                              src="https://www.nativebrains.com/storage/2020/12/story-behind-us.png"
                              width="${width}px"
                              height="300"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style="
                      box-sizing: border-box;
                      display: flex;
                      flex-direction: column;
                      position: relative;
                      border-color: #e8e8e8;

                      margin: 0px;
                    "
                  >
                    <div
                      style="
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                        flex-shrink: 0;
                        border-color: #e8e8e8;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                        justify-content: center;
                      "
                    >
                      <div style="box-sizing: border-box">
                        <div
                     
                          style="box-sizing: border-box; margin-bottom: 1.5rem"
                        >
                        </div>
                      </div>
                    </div>

          </div>
        </div>
      </div>
    </section>
    <section
      style="
        box-sizing: border-box;
        padding: 1.5rem;
        position: relative;
        margin: 0px auto;
        border-color: #e8e8e8;
      "
    >
      <div
        style="
          box-sizing: border-box;
          position: relative;
          margin: 0px auto;
          width: 441.2px;
          max-width: 1280px;
        "
      >
        <div
          class="g-cols vc_row type_default valign_top"
          style="
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            margin: 0px -1.5rem;
          "
        >
          <div
            class="vc_col-sm-12 wpb_column vc_column_container"
            style="
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              position: relative;
              border-color: #e8e8e8;
              width: ${width - 10}px;
              margin: 0px;
            "
          >
            <div
              class="vc_column-inner"
              style="
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                flex-shrink: 0;
                border-color: #e8e8e8;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
              "
            >
              <div class="wpb_wrapper" style="box-sizing: border-box">
                <div
                  class="wpb_text_column"
                  style="box-sizing: border-box; margin-bottom: 1.5rem"
                >
                  <div class="wpb_wrapper" style="box-sizing: border-box">
                    <h1
                      style="
                        box-sizing: border-box;
                        font-family: Touche_nb, sans-serif;
                        line-height: 1.2;
                        margin: 0px 20px 0px 0px;
                        padding-top: 0px;
                        font-weight: 100;
                        font-size: 35px !important;
                        letter-spacing: 0px;
                        color: #b42cf5;
                        text-align: center;
                      "
                    >
                      WHAT&nbsp;<strong style="box-sizing: border-box"
                        >MATTERS</strong
                      >&nbsp;TO US
                    </h1>
                  </div>
                </div>
                <div
                  class="ult-spacer spacer-607b0eb61a0b0"
                  style="box-sizing: border-box; height: 32px; clear: both"
                  data-height="32"
                  data-height-tab="32"
                >
                  &nbsp;
                </div>
                <div
                  class="w-image align_center"
                  style="
                    box-sizing: border-box;
                    text-align: center;
                    border-color: #e8e8e8;
                    max-width: ${width}px;
                  "
                >
                  <div
                    class="w-image-h"
                    style="
                      box-sizing: border-box;
                      border-radius: inherit;
                      background: inherit;
                      border-color: inherit !important;
                      color: inherit !important;
                    "
                  >
                    <img
                      style="
                        box-sizing: border-box;
                        max-width: ${width};
                        vertical-align: top;
                        border-radius: inherit;
                        margin-right: 22px;
                      "
                      src="https://www.nativebrains.com/storage/2020/12/matters-ranking-1.png"
                      alt=""
                      width="auto"
                      height="230"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  class="ult-spacer spacer-607b0eb61a371"
                  style="box-sizing: border-box; height: 32px; clear: both"
                  data-id="607b0eb61a371"
                  data-height="32"
                  data-height-tab="32"
                  data-height-tab-portrait=""
                >
                  &nbsp;
                </div>
                <div
                  class="g-cols wpb_row type_default valign_top vc_inner"
                  style="
                    box-sizing: border-box;
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;
                    margin: 0px -1.5rem;
                  ">
                  <div
                    class="vc_col-sm-12 wpb_column vc_column_container"
                    style="
                      box-sizing: border-box;
                      display: flex;
                      flex-direction: column;
                      position: relative;
                      border-color: #e8e8e8;
                      width: ${width}px;
                      margin: 0px;"
                      align-items: 'center';
                      justify-content: 'center';
                  >
                    <div
                      class="vc_column-inner"
                      style="
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                        flex-shrink: 0;
                        border-color: #e8e8e8;
                        padding-left: 1.2rem;
                        padding-right: 1.3rem;
                        margin-right: 30px;
                      "
                    >
                      <div class="wpb_wrapper" style="box-sizing: border-box">
                        <div
                          class="wpb_text_column"
                          style="box-sizing: border-box">
                          <div
                            class="wpb_wrapper"
                            style="box-sizing: border-box">
                            <p
                              style="
                                box-sizing: border-box;
                                margin: 0px;
                                text-align: center;
                              ">
                              <span
                                style="
                                  color: #b42cf5;
                                  font-family: Touche_nb, sans-serif;
                                  font-size: 32px;
                                  letter-spacing: 0px;
                                ">Your satisfication is all that Matter to me.</span
                              >
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
<footer
  style="
    box-sizing: border-box;
    overflow: hidden;
    margin: 0px auto;
    width: ${width}px;
    background: #ffffff;
    color: #333333;
  "
>
  <section
    style="
      box-sizing: border-box;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      position: relative;
      margin: 0px auto;
      border-color: #e8e8e8;
    "
  >
    <div
      style="
        box-sizing: border-box;
        position: relative;
        margin: 0px auto;
        width: ${width - 30}px;
        max-width: ${width}px;
      "
    >
      <div
        style="
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          position: relative;
          margin: 0px -1.5rem;
        "
      >
        <div
          class="vc_col-sm-12 wpb_column vc_column_container"
          style="
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            position: relative;
            border-color: #e8e8e8;
            width: ${width - 10}px;
            margin: 0px;
          "
        >
          <div
            class="vc_column-inner"
            style="
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              flex-shrink: 0;
              border-color: #e8e8e8;
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            "
          >
            <div class="wpb_wrapper" style="box-sizing: border-box">
              <div
                class="wpb_text_column"
                style="box-sizing: border-box; margin-bottom: 1.5rem"
              >
                <div class="wpb_wrapper" style="box-sizing: border-box">
                  <h1
                    style="
                      box-sizing: border-box;
                      font-family: Touche_nb, sans-serif;
                      line-height: 1.2;
                      margin: 0px;
                      padding-top: 0px;
                      font-weight: 100;
                      font-size: 35px !important;
                      letter-spacing: 0px;
                      color: #b42cf5;
                      text-align: center;
                    "
                  >
                    Reach Out To <strong>ME</strong>
                  </h1>
                </div>
              </div>
              <div style="box-sizing: border-box; margin-bottom: 1.5rem">
                <div class="wpb_wrapper" style="box-sizing: border-box">
                  <p
                    style="
                      box-sizing: border-box;
                      margin: 0px;
                      text-align: center;
                      font-size: 15px
                    "
                  >
                    I thrilled at the prospect of working with you. Please reach
                    out to me only if you are looking for the brightest and most
                    innovative ideas on the digital globe right now.
                  </p>
                </div>
              </div>

                <div
                  style="
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    border-color: #e8e8e8;
                    width: ${width - 30}px;
                    justify-contet: center;
                    margin: 0px 0px 1.5rem;
                  "
                >
                  <div
                    style="
                      box-sizing: border-box;
                      display: flex;
                      flex-direction: column;
                      flex-grow: 1;
                      flex-shrink: 0;
                      border-color: #e8e8e8;
                      padding-right: 1.5rem;
                    "
                  >
                    <div style="box-sizing: border-box">
                      <div
                        style="
                          box-sizing: border-box;
                          text-align: center;
                          position: relative;
                          justify-content: center;
                          display: flex;
                          align-items: center;
                        "
                      >
                        <div
                          style="box-sizing: border-box"
                        >
                          <p
                            style="
                              box-sizing: border-box;
                              margin: -0.2em 0px 0px;
                              padding: 0px 0px 0.5em;
                              font-size: 17px;
                              transition: color 0.3s ease 0s;
                            "
                          >
                            GIVE ME A RING
                          </p>
                            <p
                              style="
                                box-sizing: border-box;
                                margin: 0px;
                                font-size: 14px;
                              "
                            >
                              +92-321-2325161
                            </p>
                          </div>
                      </div>
                    </div>
                </div>
                <div
                  class="vc_col-sm-4 wpb_column vc_column_container"
                  style="
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    border-color: #e8e8e8;
                    width: ${width - 30}px;
                    margin: 0px 0px 1.5rem;
                  "
                >
                  <div
                    class="vc_column-inner"
                    style="
                      box-sizing: border-box;
                      display: flex;
                      flex-direction: column;
                      flex-grow: 1;
                      flex-shrink: 0;
                      align-items: center;
                      border-color: #e8e8e8;
                      padding-left: 1.5rem;
                      padding-right: 1.5rem;
                    "
                  >
                    <div class="wpb_wrapper" style="box-sizing: border-box">
                      <div
                        class="
                          w-iconbox
                          iconpos_right
                          style_default
                          color_custom
                          align_center
                        "
                        style="
                          box-sizing: border-box;
                          text-align: center;
                          position: relative;
                          justify-content: center;
                          display: flex;
                          align-items: flex-start;
                        "
                      >
                        <div
                          class="w-iconbox-meta"
                          style="box-sizing: border-box"
                        >
                          <p
                            class="w-iconbox-title"
                            style="
                              box-sizing: border-box;
                              margin: -0.2em 0px 0px;
                              padding: 0px 0px 0.5em;
                              font-size: 16px;
                              transition: color 0.3s ease 0s;
                            "
                          >
                            WRITE TO ME
                          </p>
                          <div
                            class="w-iconbox-text"
                            style="box-sizing: border-box"
                          >
                            <p
                              style="
                                box-sizing: border-box;
                                margin: 0px;
                                font-size: 14px;
                              "
                            >
                              anwerthesolangi@gmail.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="vc_col-sm-4 wpb_column vc_column_container"
                  style="
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    border-color: #e8e8e8;
                    width: ${width - 30}px;
                    margin: 0px;
                  "
                >
                  <div
                    style="
                      box-sizing: border-box;
                      display: flex;
                      flex-direction: column;
                      flex-grow: 1;
                      flex-shrink: 0;
                      border-color: #e8e8e8;
                      padding-left: 1.5rem;
                      align-items: center;
                      padding-right: 1.5rem;
                    "
                  >
                    <div class="wpb_wrapper" style="box-sizing: border-box">
                      <div
                        style="
                          box-sizing: border-box;
                          text-align: center;
                          position: relative;
                          justify-content: center;
                          display: flex;
                          align-items: flex-start;
                        "
                      >
                        <div
                          
                          style="
                            box-sizing: border-box;
                            font-family: Touche_nb, sans-serif;
                            font-size: 14px;
                          "
                        >
                          <p
                            
                            style="
                              box-sizing: border-box;
                              margin: -0.2em 0px 0px;
                              padding: 0px 0px 0.5em;
                              font-size: 16px;
                              transition: color 0.3s ease 0s;
                            "
                          >
                            WHATSAPP
                          </p>
                          <div
                            class="w-iconbox-text"
                            style="box-sizing: border-box"
                          >
                            <p
                              style="
                                box-sizing: border-box;
                                margin: 0px;
                                font-size: 14px;
                              "
                            >
                              +92-321-2325161
                            </p>
                          </div>
                        </div>
                        <div
                          style="
                            box-sizing: border-box;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            flex-shrink: 0;
                            font-size: 2rem;
                            max-width: 100%;
                            position: relative;
                            z-index: 1;
                            transition: background 0.3s ease 0s,
                              color 0.3s ease 0s, box-shadow 0.1s ease 0s;
                            line-height: 1;
                            margin-left: calc(15px + 0.2em);
                            color: #30c737;
                            width: 1.1em;
                            background: none !important;
                            box-shadow: none !important;
                          "
                        >
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</footer>
    
`,
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{...styles.content, width: width}}>
      <RenderHTML source={source} contentWidth={width} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    alignSelf: 'center',
  },
});

export default AboutUs;
