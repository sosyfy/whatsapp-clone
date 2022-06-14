import React from "react";
import banner from "../assets/securitybanner.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function Security() {
  return (
    <section className="pt-12">
      <img src={banner} alt="" />
      <div className="sm:px-12 px-6 py-6">
        <h1 className="text-2xl font-bold py-5">WhatsApp Security</h1>
        <h1 className="text-xl font-semibold py-4">
          Privacy and Security is in our DNA
        </h1>
        <p>
          From day one, we built WhatsApp to help you stay in touch with
          friends, share vital information during natural disasters, reconnect
          with separated families, or seek a better life. Some of your most
          personal moments are shared with WhatsApp, which is why we built
          end-to-end encryption into our app. When end-to-end encrypted, your
          messages, photos, videos, voice messages, documents, and calls are
          secured from falling into the wrong hands.
        </p>
        <div className="bg-[#77d7c8] mt-10 rounded-full  w-[17rem] h-[17rem] flex items-center justify-center mx-auto"></div>
        <div className="py-3">
          <h1 className="text-2xl font-semibold pb-3">Personal Messaging</h1>
          <p className="text-base ">
            WhatsApp's end-to-end encryption is used when you message another
            person using WhatsApp Messenger. End-to-end encryption ensures only
            you and the person you're communicating with can read or listen to
            what is sent, and nobody in between, not even WhatsApp. This is
            because with end-to-end encryption, your messages are secured with a
            lock, and only the recipient and you have the special key needed to
            unlock and read them. All of this happens automatically: no need to
            turn on settings or set up special secret chats to secure your
            messages.
          </p>
        </div>
        <div className="py-3">
          <h1 className="text-2xl font-semibold pb-3">Business Messaging</h1>
          <p className="text-base ">
            Every WhatsApp message is protected by the same Signal encryption
            protocol that secures messages before they leave your device. When
            you message a WhatsApp business account, your message is delivered
            securely to the destination chosen by the business.
          </p>
          <p className="text-base pt-3 ">
            WhatsApp considers chats with businesses that use the WhatsApp
            Business app or manage and store customer messages themselves to be
            end-to-end encrypted. Once the message is received, it will be
            subject to the business’s own privacy practices. The business may
            designate a number of employees, or even other vendors, to process
            and respond to the message.
          </p>
          <p className="text-base py-3">
            Some businesses1 will be able to choose WhatsApp’s parent company,
            Meta, to securely store messages and respond to customers. You can
            always contact that business to learn more about its privacy
            practices.
          </p>
        </div>
        <div className="py-3">
          <h1 className="text-2xl font-semibold pb-3">Payments</h1>
          <p className="text-base ">
            Payments on WhatsApp, which are available in select countries,
            enable transfers between accounts at financial institutions. Card
            and bank numbers are stored encrypted and in a highly-secured
            network. However, because financial institutions can’t process
            transactions without receiving information related to these
            payments, these payments aren’t end-to-end encrypted.
          </p>
        </div>
        <div className="py-3">
          <h1 className="text-2xl font-semibold pb-3">You’re in control</h1>
          <p className="text-base ">
            WhatsApp wants to make sure you know what’s happening with your
            messages. If you don’t want to receive messages from a person or
            business, you can always block them directly from the chat or delete
            them from your contact list. We want to make sure you understand how
            your messages are being handled and have the options you need to
            make the right decisions for you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 items-start gap-10 sm:gap-20 sm:pt-8 pt-4">
          <div className="flex flex-col justify-start items-center sm:items-start gap-3">
            <img src={icon1} alt="" className="h-32 w-32" />
            <h1 className="font-bold text-lg">Speak Freely</h1>
            <p className="text-base text-center sm:text-start">
              WhatsApp Calling lets you speak privately to your friends and
              family, even if they're in another country.
            </p>
          </div>
          <div className="flex flex-col justify-start gap-3 items-center sm:items-start">
            <img src={icon2} alt="" className="h-32 w-32" />
            <h1 className="font-bold text-lg whitespace-nowrap">
              Messages that Stay with You
            </h1>
            <p className="text-base text-center sm:text-start">
              End-to-end encrypted messages are stored on your device and not
              WhatsApp servers after they are delivered.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 items-start  gap-10 sm:gap-20   sm:pt-20 pb-8">
          <div className="flex flex-col justify-start gap-3 items-center sm:items-start">
            <img src={icon3} alt="" className="h-32 w-32" />
            <h1 className="font-bold text-lg">See for Yourself</h1>
            <p className="text-base text-center sm:text-start">
              WhatsApp lets you check whether the calls you make and messages
              you send are end-to-end encrypted. Simply look for the indicator
              directly in the chat or in contact info or business info
            </p>
          </div>
          <div className="flex flex-col justify-start gap-3 items-center sm:items-start">
            <img src={icon4} alt="" className="h-32 w-32" />
            <h1 className="font-bold text-lg whitespace-nowrap">
              Get the Details
            </h1>
            <p className="text-base text-center sm:text-start">
              Read an in-depth technical explanation of WhatsApp's end-to-end
              encryption, developed in collaboration with Open Whisper Systems.
            </p>

            <p className="text-base  text-center sm:text-start">Check Security Advisories for regular security updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;
