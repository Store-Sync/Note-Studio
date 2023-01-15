<script lang="ts">
	import 'carbon-components-svelte/css/g90.css';
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import {
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderGlobalAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		HeaderPanelLink,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SkipToContent,
		Content
	} from 'carbon-components-svelte';
	import SettingsAdjust from 'carbon-icons-svelte/lib/SettingsAdjust.svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';

	let isSideNavOpen = false;
	let isOpen1 = false;

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Header company="Store Sync" platformName="Note Studio" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust} href="/settings" />
		<HeaderAction bind:isOpen={isOpen1} icon={UserAvatarFilledAlt} closeIcon={UserAvatarFilledAlt}>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Account Details</HeaderPanelDivider>
				<HeaderPanelLink>Change Account Details</HeaderPanelLink>
				<HeaderPanelLink>Reset Password</HeaderPanelLink>
				<HeaderPanelLink>Delete Account</HeaderPanelLink>
				<HeaderPanelDivider>Application Settings</HeaderPanelDivider>
				<HeaderPanelLink>List Accounts</HeaderPanelLink>
				<HeaderPanelLink>Add Another Account</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink text="Link 1" />
		<SideNavLink text="Link 2" />
		<SideNavLink text="Link 3" />
		<SideNavMenu text="Menu">
			<SideNavMenuItem href="/" text="Link 1" />
			<SideNavMenuItem href="/" text="Link 2" />
			<SideNavMenuItem href="/" text="Link 3" />
		</SideNavMenu>
	</SideNavItems>
</SideNav>

<Content style="overflow-x: hidden;">
	<slot />
</Content>
