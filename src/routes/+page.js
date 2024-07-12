import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/** @type {import('./$types').PageLoad} */
export const load = async ({}) => {
	const email = 'm.allayarov@innopolis.university';

	try {
		const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
		const data = await response.json();
		const comicId = data;

		const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
		const comicData = await comicResponse.json();

		const comicDate = new Date(comicData.year, comicData.month, comicData.day).toLocaleDateString();
		const relativeTime = dayjs(
			comicData.year + '-' + comicData.month + '-' + comicData.day
		).fromNow();

		return {
			props: {
				comicData,
				comicDate,
				relativeTime
			}
		};
	} catch (error) {
		console.error(error);
		return {
			status: 500,
			error: 'An error occurred while fetching the comic data.'
		};
	}
};
