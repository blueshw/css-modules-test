import Link from "next/link";
import styles from "../src/css/style.module.scss";
import cn from "classnames";

const AboutPage = () => (
  <>
    <h1>Second Page (CSS Modules)</h1>
    <div className={styles.box}>
      <Link href="/">
        <a>Go First Page</a>
      </Link>
    </div>
    <div className={cn(styles.flex, styles.container_0)}>
      <div className={cn(styles.flex, styles.wrapper_1)}>
        <button
          className={cn(styles.button, "btn_transparent_02", styles.p_10)}
        >
          <div className={cn(styles.text, "pink")}>Button</div>
        </button>
        <button
          className={cn(
            styles.button,
            "btn_transparent_yellow01_a70",
            styles.p_4
          )}
        >
          <div className={cn(styles.text, "green")}>Button</div>
        </button>
        <button
          className={cn(styles.button, "btn_transparent_yellow01_a70_02")}
        >
          <div className={cn(styles.text, "defaultGray")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black")}>
          <div className={cn(styles.text, "gray02_a30")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black_02")}>
          <div className={cn(styles.text, "black_a60", styles.pb_8)}>
            Button
          </div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_2)}>
        <button className={cn(styles.button, "btn_black_03")}>
          <div className={cn(styles.text, "dimmed")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black02", styles.p_6)}>
          <div className={cn(styles.text, "blue")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey01")}>
          <div className={cn(styles.text, "black")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey03")}>
          <div className={cn(styles.text, "black02")}>Button</div>
        </button>
        <button
          className={cn(styles.button, "btn_lightGrey03_02", styles.pb_12)}
        >
          <div className={cn(styles.text, "grey00")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_3)}>
        <button className={cn(styles.button, "btn_lightGrey04")}>
          <div className={cn(styles.text, "grey01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey01")}>
          <div className={cn(styles.text, "grey02", styles.p_7)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_black_a30")}>
          <div className={cn(styles.text, "grey03")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey02")}>
          <div className={cn(styles.text, "grey04", styles.pb_5)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white")}>
          <div className={cn(styles.text, "yellow01")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_4)}>
        <button className={cn(styles.button, "btn_red04")}>
          <div className={cn(styles.text, "yellow02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01", styles.p_11)}>
          <div className={cn(styles.text, "red01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_02")}>
          <div className={cn(styles.text, "red02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_03")}>
          <div className={cn(styles.text, "red03", styles.p_3)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_04")}>
          <div className={cn(styles.text, "red04")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_5)}>
        <button className={cn(styles.button, "btn_whatsapp", styles.p_1)}>
          <div className={cn(styles.text, "blue01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_google")}>
          <div className={cn(styles.text, "blue02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black02_apple")}>
          <div className={cn(styles.text, "lightGrey01", styles.pb_2)}>
            Button
          </div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey01")}>
          <div className={cn(styles.text, "lightGrey02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey04")}>
          <div className={cn(styles.text, "lightGrey03")}>Button</div>
        </button>
      </div>
    </div>
    <div className={cn(styles.flex, styles.container_1)}>
      <div className={cn(styles.flex, styles.wrapper_1)}>
        <button
          className={cn(styles.button, "btn_transparent_02", styles.p_10)}
        >
          <div className={cn(styles.text, "pink")}>Button</div>
        </button>
        <button
          className={cn(
            styles.button,
            "btn_transparent_yellow01_a70",
            styles.p_4
          )}
        >
          <div className={cn(styles.text, "green")}>Button</div>
        </button>
        <button
          className={cn(styles.button, "btn_transparent_yellow01_a70_02")}
        >
          <div className={cn(styles.text, "defaultGray")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black")}>
          <div className={cn(styles.text, "gray02_a30")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black_02")}>
          <div className={cn(styles.text, "black_a60", styles.pb_8)}>
            Button
          </div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_2)}>
        <button className={cn(styles.button, "btn_black_03")}>
          <div className={cn(styles.text, "dimmed")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black02", styles.p_6)}>
          <div className={cn(styles.text, "blue")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey01")}>
          <div className={cn(styles.text, "black")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey03")}>
          <div className={cn(styles.text, "black02")}>Button</div>
        </button>
        <button
          className={cn(styles.button, "btn_lightGrey03_02", styles.pb_12)}
        >
          <div className={cn(styles.text, "grey00")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_3)}>
        <button className={cn(styles.button, "btn_lightGrey04")}>
          <div className={cn(styles.text, "grey01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey01")}>
          <div className={cn(styles.text, "grey02", styles.p_7)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_black_a30")}>
          <div className={cn(styles.text, "grey03")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey02")}>
          <div className={cn(styles.text, "grey04", styles.pb_5)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white")}>
          <div className={cn(styles.text, "yellow01")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_4)}>
        <button className={cn(styles.button, "btn_red04")}>
          <div className={cn(styles.text, "yellow02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01", styles.p_11)}>
          <div className={cn(styles.text, "red01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_02")}>
          <div className={cn(styles.text, "red02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_03")}>
          <div className={cn(styles.text, "red03", styles.p_3)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_04")}>
          <div className={cn(styles.text, "red04")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_5)}>
        <button className={cn(styles.button, "btn_whatsapp", styles.p_1)}>
          <div className={cn(styles.text, "blue01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_google")}>
          <div className={cn(styles.text, "blue02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black02_apple")}>
          <div className={cn(styles.text, "lightGrey01", styles.pb_2)}>
            Button
          </div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey01")}>
          <div className={cn(styles.text, "lightGrey02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey04")}>
          <div className={cn(styles.text, "lightGrey03")}>Button</div>
        </button>
      </div>
    </div>
    <div className={cn(styles.flex, styles.container_2)}>
      <div className={cn(styles.flex, styles.wrapper_1)}>
        <button
          className={cn(styles.button, "btn_transparent_02", styles.p_10)}
        >
          <div className={cn(styles.text, "pink")}>Button</div>
        </button>
        <button
          className={cn(
            styles.button,
            "btn_transparent_yellow01_a70",
            styles.p_4
          )}
        >
          <div className={cn(styles.text, "green")}>Button</div>
        </button>
        <button
          className={cn(styles.button, "btn_transparent_yellow01_a70_02")}
        >
          <div className={cn(styles.text, "defaultGray")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black")}>
          <div className={cn(styles.text, "gray02_a30")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black_02")}>
          <div className={cn(styles.text, "black_a60", styles.pb_8)}>
            Button
          </div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_2)}>
        <button className={cn(styles.button, "btn_black_03")}>
          <div className={cn(styles.text, "dimmed")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black02", styles.p_6)}>
          <div className={cn(styles.text, "blue")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey01")}>
          <div className={cn(styles.text, "black")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey03")}>
          <div className={cn(styles.text, "black02")}>Button</div>
        </button>
        <button
          className={cn(styles.button, "btn_lightGrey03_02", styles.pb_12)}
        >
          <div className={cn(styles.text, "grey00")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_3)}>
        <button className={cn(styles.button, "btn_lightGrey04")}>
          <div className={cn(styles.text, "grey01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey01")}>
          <div className={cn(styles.text, "grey02", styles.p_7)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_black_a30")}>
          <div className={cn(styles.text, "grey03")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey02")}>
          <div className={cn(styles.text, "grey04", styles.pb_5)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white")}>
          <div className={cn(styles.text, "yellow01")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_4)}>
        <button className={cn(styles.button, "btn_red04")}>
          <div className={cn(styles.text, "yellow02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01", styles.p_11)}>
          <div className={cn(styles.text, "red01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_02")}>
          <div className={cn(styles.text, "red02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_03")}>
          <div className={cn(styles.text, "red03", styles.p_3)}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_yellow01_04")}>
          <div className={cn(styles.text, "red04")}>Button</div>
        </button>
      </div>
      <div className={cn(styles.flex, styles.wrapper_5)}>
        <button className={cn(styles.button, "btn_whatsapp", styles.p_1)}>
          <div className={cn(styles.text, "blue01")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_white_google")}>
          <div className={cn(styles.text, "blue02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_black02_apple")}>
          <div className={cn(styles.text, "lightGrey01", styles.pb_2)}>
            Button
          </div>
        </button>
        <button className={cn(styles.button, "btn_white_lightGrey01")}>
          <div className={cn(styles.text, "lightGrey02")}>Button</div>
        </button>
        <button className={cn(styles.button, "btn_lightGrey04")}>
          <div className={cn(styles.text, "lightGrey03")}>Button</div>
        </button>
      </div>
    </div>
  </>
);

export default AboutPage;
