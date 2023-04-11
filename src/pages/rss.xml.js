import rss from '@astrojs/rss';

export function get(context) {
	return rss({
		title: 'Lsendoya´s Blog',
		description:
			'In this blog, you will meet Luis Hernando Sendoya Serrato, a software developer specialized in Golang, JavaScript, Docker, SQL, TypeScript and React. Discover his skills and most recent projects.',
		site: context.site,
		items: [],
		customData: `<language>en-us</language>`,
	});
}
