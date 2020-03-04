import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css'


export default function Main() {

	const [search, setSearch] = useState('');
	const [data, setData] = useState({});

	async function loadUserRepositories() {
		const response = await api.get(search);
		console.log(response);
		setData(response.data);
	}

	return (
		<main>
			<div className="form-group">
				<input className="form-control" type="text" placeholder="tonsky/FiraCode" value={search} onChange={e => setSearch(e.target.value)} />
				<button className="btn btn-primary" type="button" onClick={loadUserRepositories}>Buscar</button>
			</div>
			<div className="form-results">
				<dl>
					<div>
						<dt>Estrelas</dt>
						<dd>{data.stargazers_count && (<>
							<svg className="pb-2" height="28" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" />
							</svg>{data.stargazers_count}</>)}
						</dd>
					</div>

					<div>
						<dt>Forks</dt>
						<dd>{data.forks_count && (<>
							<svg className="pb-2" height="28" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
							</svg>{data.forks_count}</>)}
						</dd>
					</div>

					<div>
						<dt>Issues</dt>
						<dd>{data.open_issues && (<>
							<svg className="pb-2" height="28" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
							</svg>{data.open_issues}</>)}
						</dd>
					</div>

					<div>
						<dt>Último Commit</dt>
						<dd>{data.pushed_at && (<>
							<svg className="pb-2" height="28" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z" />
							</svg>
							{new Date(data.pushed_at).toLocaleDateString('pt-BR')}</>)}
						</dd>
					</div>

					<div>
						<dt> Nome da Licença</dt>
						<dd>{data.license && (<>
							<svg className="pb-2" height="28" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z" />
							</svg>
							{data.license.name}</>)}</dd>
					</div>
				</dl>
			</div>
		</main>
	)
}