import * as prismicT from "@prismicio/types";

export type HeroSlice = prismicT.Slice<
	"hero",
	{
		content: prismicT.RichTextField;
		uid: prismicT.KeyTextField;
		buttonStyle: prismicT.KeyTextField;
		buttonAction: string;
		buttonTarget: string;
		buttonContent: prismicT.RichTextField;
	}
>;
