import './App.css';
import { useState } from 'react';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [data, setData] = useState([]);
	const [toggleDetails, setToggleDetails] = useState(null);

	function onSearchSubmit(query) {
		searchArtworks(query).then((json) => {
			setData([...json.data]);
			console.log(data);
		});
	}

	function scrollToTop() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	function onShowDetails(item) {
		setToggleDetails(item);
		scrollToTop(); //Scroll to top of page
	}

	const SearchResults = () => {
		return (
			<ol id="search-results">
				{data.length > 0 &&
					data.map((result, index) => {
						const { id, title, artist_title } = result;
						return (
							<li key={id}>
								<p>
									<strong>Title:</strong>
									{title}
								</p>
								<p>
									<strong>Artist:</strong>
									{artist_title}
								</p>
								<button
									onClick={(e) => {
										onShowDetails(result);
									}}
								>
									Item Details
								</button>
							</li>
						);
					})}
			</ol>
		);
	};

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{toggleDetails ? (
				<ImageDetailsPage
					item={toggleDetails}
					setToggleDetails={setToggleDetails}
				/>
			) : (
				<SearchForm onSearchSubmit={onSearchSubmit} />
			)}
			<SearchResults />
			<Footer />
		</div>
	);
}
