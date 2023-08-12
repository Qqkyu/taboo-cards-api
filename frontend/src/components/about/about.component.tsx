import { FunctionComponent } from "react";
import { Font } from "@/design-system/font/font.component";

export const About: FunctionComponent = () => {
  return (
    <div className="flex w-[300px] flex-col sm:w-[500px] lg:w-[750px]">
      <section className="flex flex-col gap-6">
        <Font.H2 color="text-base-content">Who are you?</Font.H2>
        <Font.P1 color="text-base-content">
          Hi, I'm{" "}
          <a href="https://github.com/Qqkyu" target="_blank" className="link link-primary">
            Michał Kuliński
          </a>
          , and I'm a developer from Poland. Since I enjoy both JavaScript and taboo, I've decided to create this API
          and use it to write my own taboo game.
        </Font.P1>
      </section>
      <div className="divider" />
      <section className="flex flex-col gap-6">
        <Font.H2 color="text-base-content">How are the cards created?</Font.H2>
        <div>
          <Font.P1 color="text-base-content">I use a of couple tools to generate data.</Font.P1>
          <dl className="my-2 pl-1 sm:pl-2">
            <dt>
              <Font.P1 color="text-base-content">Words and phrases generators:</Font.P1>
            </dt>
            <dd className="pl-2 sm:pl-4">
              <Font.P1 color="text-base-content">
                <a href="https://randomwordgenerator.com/" target="_blank" className="link link-primary">
                  Random word generator
                </a>
              </Font.P1>
            </dd>
            <dd className="mb-1 pl-2 sm:pl-4">
              <Font.P1 color="text-base-content">
                <a href="https://randomwordgenerator.com/phrase.php" target="_blank" className="link link-primary">
                  Random phrase generator
                </a>
              </Font.P1>
            </dd>
            <dt>
              <Font.P1 color="text-base-content">AI tools:</Font.P1>
            </dt>
            <dd className="pl-2 sm:pl-4">
              <Font.P1 color="text-base-content">
                <a href="https://chat.openai.com/" target="_blank" className="link link-primary">
                  ChatGPT
                </a>
              </Font.P1>
            </dd>
            <dd className="mb-1 pl-2 sm:pl-4">
              <Font.P1 color="text-base-content">
                <a href="https://bard.google.com/" target="_blank" className="link link-primary">
                  Bard
                </a>
              </Font.P1>
            </dd>
            <dt>
              <Font.P1 color="text-base-content">Translators:</Font.P1>
            </dt>
            <dd className="pl-2 sm:pl-4">
              <Font.P1 color="text-base-content">
                <a href="https://www.deepl.com/translator" target="_blank" className="link link-primary">
                  DeepL
                </a>
              </Font.P1>
            </dd>
            <dd className="mb-1 pl-2 sm:pl-4">
              <Font.P1 color="text-base-content">
                <a href="https://www.diki.pl/" target="_blank" className="link link-primary">
                  diki
                </a>
              </Font.P1>
            </dd>
          </dl>
          <Font.P1 color="text-base-content">
            I usually generate words and phrases using the generators listed above. Then, AI tools create words that
            can't be used when explaining the term. After that, I translate each card and manually check forbidden
            words. Finally, I subjectively choose difficulty and add the card to the database!
          </Font.P1>
        </div>
      </section>
      <div className="divider" />
      <section className="flex flex-col gap-6">
        <Font.H2 color="text-base-content">Issues</Font.H2>
        <Font.P1 color="text-base-content">
          If you encounter any issue with the data or this website, please file an issue in the{" "}
          <a href="https://github.com/Qqkyu/taboo-cards-api" target="_blank" className="link link-primary">
            GitHub repository
          </a>
          .
        </Font.P1>
      </section>
      <div className="divider" />
      <section className="flex flex-col gap-6">
        <Font.H2 color="text-base-content">Contact</Font.H2>
        <Font.P1 color="text-base-content">
          Head over to my{" "}
          <a href="https://github.com/Qqkyu/taboo-cards-api" target="_blank" className="link link-primary">
            GitHub profile
          </a>
          . I've got a couple of contact options set up there. Can't wait to hear from you!
        </Font.P1>
      </section>
    </div>
  );
};
