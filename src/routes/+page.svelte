<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.session}
	<!-- content here -->
	<p>Welcome, {data.session.user.email}</p>
{:else}
	<!-- else content here -->
	<p>Not logged in</p>
{/if}
