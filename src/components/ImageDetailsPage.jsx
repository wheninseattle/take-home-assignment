import './ImageDetailsPage.css';
export function ImageDetailsPage({ item, setToggleDetails }) {
	function onReturnToSearch() {
		setToggleDetails(null);
	}

	return (
		<div className="Details">
			<img
				alt={item.thumbnail.alt_text}
				className="Artwork"
				src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
			/>
			<h3>Title: {item.title}</h3>
			<p>
				<strong>Artist: </strong> {item.artist_title || 'Not available'}
			</p>
			<p>
				<strong>Date: </strong> {item.date_display || 'Not available'}
			</p>
			<button onClick={onReturnToSearch}>Back</button>
		</div>
	);
}
