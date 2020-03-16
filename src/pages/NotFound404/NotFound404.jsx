import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

export default () => (
	<div>
		<Result
			status="404"
			title="404"
			subTitle="Desculpe, a página que você tentou acessar não existe"
			extra={<Link to="/">Voltar a página inicial</Link>}
		/>
	</div>
);
