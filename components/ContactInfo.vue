<template>
    <table class="table table-borderless w-auto">
        <tbody>
        <tr>
            <td class="text-right">
                <fa :icon="['fas', 'map-marker-alt']"/>
            </td>
            <td>
                {{ $t('layout.contact.street') }}
                <br/>
                {{ $t('layout.contact.postal') }}
                <br/>
                {{ $t('layout.contact.city') }}
            </td>
        </tr>
        <tr>
            <td class="text-right">
                <fa :icon="['fas', 'phone']"/>
            </td>
            <td>
                {{ $t('layout.contact.phone') }}
            </td>
        </tr>
        <tr>
            <td class="text-right">
                <fa :icon="['fas', 'envelope']"/>
            </td>
            <td>
                {{ $t('layout.contact.email') }}
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "ContactInfo"
}
</script>
