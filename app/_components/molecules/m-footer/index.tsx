import Link from 'next/link';
import SvgIcon1 from './icons/SvgIcon1';
import SvgIcon2 from './icons/SvgIcon2';
import SvgIcon3 from './icons/SvgIcon3';
import SvgIcon4 from './icons/SvgIcon4';
import SvgIcon5 from './icons/SvgIcon5';

function Footer() {
  return (
    <div className="relative bg-slate-900 flex justify-start items-stretch flex-col max-w-full box-border pt-14 pb-[12.5px] px-10">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-2 grow-0 shrink-0 basis-auto">
        <p className="text-base font-normal text-center text-white grow-0 shrink-0 basis-auto ml-2">
          @ 2023. All rights reserved.
        </p>
        <div className="flex items-center flex-col xl:flex-row flex-wrap grow-0 shrink-0 basis-auto space-y-0">
          <div className="flex items-center flex-row flex-wrap gap-6 grow-0 shrink-0 basis-auto">
            <Link
              className="text-base font-normal text-white grow-0 shrink-0 basis-auto"
              href="/broker-recommendation"
            >
              Broker Recommendation
            </Link>
            <Link
              className="text-base font-normal text-white grow-0 shrink-0 basis-auto"
              href="/privacy-policy"
            >
              Privacy
            </Link>
            <Link
              className="text-base font-normal text-white grow-0 shrink-0 basis-auto"
              href="/regional-restriction"
            >
              Regional Restriction
            </Link>
            <Link
              className="text-base font-normal text-white grow-0 shrink-0 basis-auto"
              href="/faqs"
            >
              FAQs
            </Link>
            <span className="text-base font-normal text-white grow-0 shrink-0 basis-auto">
              About
            </span>
            <span className="text-base font-normal text-white grow-0 shrink-0 basis-auto">
              Support
            </span>
          </div>
          <div className="flex justify-start items-start flex-row gap-4 grow-0 shrink-0 basis-auto lg:ml-4 pt-[2rem] lg:pt-[0]">
            <SvgIcon1 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
            <SvgIcon2 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
            <SvgIcon3 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
            <SvgIcon4 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
            <SvgIcon5 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
          </div>
        </div>
      </div>
      <p className="text-sm text-justify text-white grow-0 shrink-0 basis-auto mt-[70px]">
        <span className="font-bold">
          Risk Disclosure: <br />
          <br />
          Forex Trading is Inherently Risky:
          <br />
        </span>
        <span className="font-light">
          Forex trading carries inherent risks, and investing in trading bots on Topbotcopier is no
          exception. We want to emphasize that trading in the foreign exchange market involves
          substantial risk and is not suitable for everyone. Before engaging in trading activities
          through our platform, it is essential to understand the potential risks involved.
          <br />
          <br />
        </span>
        <span className="font-bold">
          No Guaranteed Profits:
          <br />
        </span>
        <span className="font-light">
          We must stress that neither Topbotcopier nor the trading bots listed on our platform can
          guarantee profits. The past performance of a trading bot does not guarantee future
          results. There is a possibility of financial loss when copying these bots. Traders should
          be aware that the Forex market is volatile, and losses can occur.
          <br />
          <br />
        </span>
        <span className="font-bold">
          We Risk Our Capital:
          <br />
        </span>
        <span className="font-light">
          Topbotcopier risks its capital in these trading activities by allocating funds to master
          accounts for copying. We do not have access to your funds or passwords for your trading
          accounts. Importantly, we will never request your MT4 or MT5 passwords. Our risk-taking
          should not be confused with ownership or control of your account.
          <br />
          <br />
        </span>
        <span className="font-bold">
          Trade According to Your Risk Appetite:
          <br />
        </span>
        <span className="font-light">
          We want to empower our users to make informed decisions. It&apos;s crucial to trade
          according to your individual risk appetite and financial capacity. You should only invest
          funds that you can afford to lose. We strongly advise diversifying your investments and
          not concentrating all your capital on a single trading bot.
          <br />
          <br />
        </span>
        <span className="font-bold">
          Bots Can Fail, Technical Issues Can Occur:
          <br />
        </span>
        <span className="font-light">
          Trading bots, while designed to be efficient, can encounter failures, technical issues,
          lags, or errors. These factors are beyond our control, and we cannot guarantee the
          seamless operation of trading bots or the absence of technical hiccups.
          <br />
          <br />
        </span>
        <span className="font-bold">
          No Liability for Losses:
          <br />
        </span>
        <span className="font-light">
          Topbotcopier will not be held liable for any losses incurred while using our platform or
          copying trading bots. We are a research project facilitating access to trading
          opportunities but do not have control over market movements or the performance of bots.
          <br />
        </span>
        <span className="font-bold">
          <br />
          In Conclusion:
          <br />
        </span>
        <span className="font-light">
          Trading Forex and copying trading bots involves substantial risk. We urge you to exercise
          caution, conduct your own research, and trade responsibly. Topbotcopier is here to provide
          opportunities, but it is your responsibility to manage your own risk and financial
          well-being.
          <br />
          <br />
        </span>
        <span className="font-bold">
          Regional Restriction:
          <br />
        </span>
        <span className="font-bold">
          Regional Restriction Notice:
          <br />
        </span>
        <span className="font-light">
          <br />
          Please be advised that Topbotcopier has specific regional restrictions in place due to the
          regulatory framework of the brokers we collaborate with. We regret to inform you that we
          do not accept users from the following countries, as the brokers we utilize do not have
          the necessary regulatory approvals in these regions: United States of America (USA), Iran,
          Japan, Haiti, and Syria.
          <br />
          <br />
          It is crucial to note that these restrictions are implemented to ensure compliance with
          regulatory requirements and to safeguard the interests of our users.
          <br />
          <br />
          Furthermore, we strongly recommend that users verify whether their country is accepted by
          the specific broker associated with the trading bot they intend to use. We exclusively
          offer our services to countries for which the respective brokers have obtained regulatory
          approval. While we have listed a few restricted countries here, there may be others not
          mentioned, so it is essential to confirm the broker&apos;s acceptance policy for your
          location before utilizing our platform.
          <br />
          <br />
          Your understanding and cooperation regarding these regional restrictions are greatly
          appreciated.
          <br />
        </span>
        <span className="font-bold">
          <br />
        </span>
      </p>
    </div>
  );
}
export default Footer;
