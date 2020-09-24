import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelRow
				image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
				channel="Clever Programmer"
				verified
				subs="791K"
				noOfVideos={445}
				description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
			/>
			<hr />
			<VideoRow
				views="9.9K"
				subs="791K"
				description="Join Profit With JavaScript 👇 "
				timestamp="Streamed 17 hours ago"
				channel="Clever Programmer"
				title="🔴 Back 2 Basics: Episode 1 [Profit with Javascript FREE SAMPLE] 🚀"
				image="https://i.ytimg.com/an_webp/5x3OY0OWWN4/mqdefault_6s.webp?du=3000&sqp=CMiSsvsF&rs=AOn4CLDzH0rRdDrRoUeOc6uNRcw2xNeQYQ"
			/>
			<VideoRow
				views="18K"
				subs="791K"
				description="[EARLYBIRD PRICE - Save $100] - Join Profit with Javascript 👇
                https://www.cleverprogrammer.com/pwj?...
                In this FREE LIVE training,  .... "
				timestamp="Streamed 4 days ago"
				channel="Clever Programmer"
				title="🔴The Resume That Got Me Into Google and Microsoft (software engineer resume tips)"
				image="https://i.ytimg.com/an_webp/COiyxEbZBiw/mqdefault_6s.webp?du=3000&sqp=CNTHsvsF&rs=AOn4CLDa3iEFXveBDfxKSqC116cp0yYzyA"
			/>

			<VideoRow
				views="8.6K"
				subs="791K"
				description="Join the best JavaScript course on the planet 👉 https://cleverprogrammer.com/pwj
                #softwaredeveloper #rocketship #blueorigin #newglenn "
				timestamp="Streamed 21 hours ago"
				channel="Clever Programmer"
				title="We just hired a software developer that works on ROCKET SHIPS (from Blue Origin)"
				image="https://i.ytimg.com/an_webp/piFSLM4jrkI/mqdefault_6s.webp?du=3000&sqp=COylsvsF&rs=AOn4CLCe1p3wrKaNh-gmJW5VgMUxwc90wQ"
			/>

			<VideoRow
				views="1.1M"
				subs="791K"
				description="Here is the best free javascript programming course on the planet. Made with lots of ❤️...."
				timestamp="10 months ago"
				channel="Clever Programmer"
				title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
				image="https://i.ytimg.com/an_webp/Qqx_wzMmFeA/mqdefault_6s.webp?du=3000&sqp=CIDEsvsF&rs=AOn4CLA--6Vg4SWDRAzI7pT_j6cRFIJNvA"
			/>

			<VideoRow
				views="1.6M"
				subs="791K"
				description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com "
				timestamp="9 months ago"
				channel="Clever Programmer"
				title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
				image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CJzDsvsF&rs=AOn4CLAqzwpC9mPfUQN-W1-nk_PT9PCOjA"
			/>

			<VideoRow
				views="34K"
				subs="791K"
				description="Join the How To Become React JavaScript Developer Webinar 👇
                https://www.crowdcast.io/e/how-to-bec... "
				timestamp="Streamed 20 days ago"
				channel="Clever Programmer"
				title="🔴 Your Personalized $100k/year Roadmap for React JavaScript Developers (Challenge Day 5)"
				image="https://i.ytimg.com/an_webp/LRr1TS5mRfA/mqdefault_6s.webp?du=3000&sqp=CIC9svsF&rs=AOn4CLBjrnul87vdiMP4ThLdBf7OQ23GOg"
			/>
			<VideoRow
				views="109K"
				subs="791K"
				description="3 Secrets to Become a Python Freelancer FREE TRAINING: https://events.genndi.com/register/16.. "
				timestamp="1 year ago"
				channel="Clever Programmer"
				title="HTML Crash Course for Absolute Beginners 2020 [Tutorial]"
				image="https://i.ytimg.com/an_webp/FNGoExJlLQY/mqdefault_6s.webp?du=3000&sqp=CI6tsvsF&rs=AOn4CLCdEAc1WlQgkhJdq3lXTHewUsiZVQ"
			/>
		</div>
	);
}

export default SearchPage;
