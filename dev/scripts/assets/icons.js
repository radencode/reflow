import React from 'react';

export default function(icon){
	switch(icon){
		case 'controls-exit':
			return ( <i class="fa fa-times" aria-hidden="true"></i> );
			break;
		case 'controls-maximize':
			return ( <i class="fa fa-window-maximize" aria-hidden="true"></i> );
			break;
		case 'controls-minimize':
			return ( <i class="fa fa-window-minimize" aria-hidden="true"></i> );
			break;
		case 'controls-restore':
			return ( <i class="fa fa-window-restore" aria-hidden="true"></i> );
			break;			
		case 'page-rename':
			return ( <i class="fa fa-pencil" aria-hidden="true"></i> );
			break;
		case 'page-flow':
			return ( <i class="fa fa-code-fork" aria-hidden="true"></i> );
			break;
		case 'page-history':
			return ( <i class="fa fa-history" aria-hidden="true"></i> );
			break;
		case 'page-settings':
			return ( <i class="fa fa-cogs" aria-hidden="true"></i> );
			break;
		case 'rename-modal-browse':
			return ( <i class="fa fa-search" aria-hidden="true"></i> );
			break;
		case 'rename-modal-browse-content-database':
			return ( <i class="fa fa-database" aria-hidden="true"></i> );
			break;
		case 'rename-modal-browse-content-arrow':
			return ( <i class="fa fa-chevron-down" aria-hidden="true"></i> );
			break;
		case 'rename-modal-configure':
			return ( <i class="fa fa-wrench" aria-hidden="true"></i> );
			break;
		case 'rename-modal-finalize':
			return ( <i class="fa fa-check" aria-hidden="true"></i> );
			break;
		case 'rename-modal-options':
			return ( <i class="fa fa-cog" aria-hidden="true"></i> );
			break;
	}
}