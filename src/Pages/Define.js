export default function Define() {
	return (
		<div>
			
			<div>
				<form>
					<label>
						Height:&nbsp;
						<input type="number" name="height" />
					</label>
					<br />
					<label>
						Width:&nbsp;
						<input type="number" name="width" />
					</label>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>

			<div>
				<p>Drop a file</p>
			</div>

		</div>
	);
}
