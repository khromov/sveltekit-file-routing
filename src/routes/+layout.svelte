<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<ul>
    <li>
        <a href="#/">Home</a>
    </li>
    <li>
        <a href="#/about">About</a>
    </li>
    <li>
        <a href="#/contact">Contact</a>
    </li>
</ul>

Pathname: {data.url.pathname}<br/>
Route: {data.route}

{@render children()}