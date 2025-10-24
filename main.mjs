var c = {
    key: "RollOption",
    option: "primary-apparition",
    suboptions: [
        { label: "pf2e-animist.crafter-in-the-vault", value: "crafter-in-the-vault" },
        { label: "pf2e-animist.custodian-of-groves-and-gardens",value: "custodian-of-groves-and-gardens"},
        { label: "pf2e-animist.echo-of-lost-moments", value: "echo-of-lost-moments" },
        { label: "pf2e-animist.impostor-in-hidden-places", value: "impostor-in-hidden-places" },
        { label: "pf2e-animist.lurker-in-devouring-dark", value: "lurker-in-devouring-dark" },
        { label: "pf2e-animist.monarch-of-the-fey-courts", value: "monarch-of-the-fey-courts" },
        { label: "pf2e-animist.reveler-in-lost-glee", value: "reveler-in-lost-glee" },
        { label: "pf2e-animist.shepherd-of-errant-winds", value: "shepherd-of-errant-winds" },
        { label: "pf2e-animist.speaker-in-sibilance", value: "speaker-in-sibilance" },
        { label: "pf2e-animist.stalker-in-darkened-boughs", value: "stalker-in-darkened-boughs" },
        { label: "pf2e-animist.steward-of-stone-and-fire", value: "steward-of-stone-and-fire" },
        { label: "pf2e-animist.vanguard-of-roaring-waters", value: "vanguard-of-roaring-waters" },
        { label: "pf2e-animist.witness-to-ancient-battles", value: "witness-to-ancient-battles" },
        { label: "pf2e-animist.nomad-of-rolling-sands", value: "nomad-of-rolling-sands" }, //1st instance
        { label: "pf2e-animist.dispersed", value: "dispersed" }], toggleable: !0, alwaysActive: !0, label: "pf2e-animist.primary-label", value: !0, selection: "dispersed"
    },
    I = {
    key: "RollOption",
    option: "secondary-apparition",
    suboptions: [{ label: "Crafter in the Vault", value: "crafter-in-the-vault", predicate: [{ not: "primary-apparition:crafter-in-the-vault" }] },
        { label: "pf2e-animist.custodian-of-groves-and-gardens", value: "custodian-of-groves-and-gardens", predicate: [{ not: "primary-apparition:custodian-of-groves-and-gardens" }] },
        { label: "pf2e-animist.echo-of-lost-moments", value: "echo-of-lost-moments", predicate: [{ not: "primary-apparition:echo-of-lost-moments" }] },
        { label: "pf2e-animist.impostor-in-hidden-places", value: "impostor-in-hidden-places", predicate: [{ not: "primary-apparition:impostor-in-hidden-places" }] },
        { label: "pf2e-animist.lurker-in-devouring-dark", value: "lurker-in-devouring-dark", predicate: [{ not: "primary-apparition:lurker-in-devouring-dark" }] },
        { label: "pf2e-animist.monarch-of-the-fey-courts", value: "monarch-of-the-fey-courts", predicate: [{ not: "primary-apparition:monarch-of-the-fey-courts" }] },
        { label: "pf2e-animist.reveler-in-lost-glee", value: "reveler-in-lost-glee", predicate: [{ not: "primary-apparition:reveler-in-lost-glee" }] },
        { label: "pf2e-animist.shepherd-of-errant-winds", value: "shepherd-of-errant-winds", predicate: [{ not: "primary-apparition:shepherd-of-errant-winds" }] },
        { label: "pf2e-animist.speaker-in-sibilance", value: "speaker-in-sibilance", predicate: [{ not: "primary-apparition:speaker-in-sibilance" }] },
        { label: "pf2e-animist.stalker-in-darkened-boughs", value: "stalker-in-darkened-boughs", predicate: [{ not: "primary-apparition:stalker-in-darkened-boughs" }] },
        { label: "pf2e-animist.steward-of-stone-and-fire", value: "steward-of-stone-and-fire", predicate: [{ not: "primary-apparition:steward-of-stone-and-fire" }] },
        { label: "pf2e-animist.vanguard-of-roaring-waters", value: "vanguard-of-roaring-waters", predicate: [{ not: "primary-apparition:vanguard-of-roaring-waters" }] },
        { label: "pf2e-animist.witness-to-ancient-battles", value: "witness-to-ancient-battles", predicate: [{ not: "primary-apparition:witness-to-ancient-battles" }] },
        { label: "pf2e-animist.nomad-of-rolling-sands", value: "nomad-of-rolling-sands", predicate: [{ not: "primary-apparition:nomad-of-rolling-sands" }] }, //2nd instance
        { label: "pf2e-animist.dispersed", value: "dispersed" }], toggleable: !0, alwaysActive: !0, label: "pf2e-animist.secondary-label", value: !0, selection: "dispersed"
    },
    h = {
        key: "RollOption",
        option: "third-apparition", 
        suboptions: [{ label: "pf2e-animist.crafter-in-the-vault", value: "crafter-in-the-vault", predicate: [{ nor: ["primary-apparition:crafter-in-the-vault", "secondary-apparition:crafter-in-the-vault"] }] },
            { label: "pf2e-animist.custodian-of-groves-and-gardens", value: "custodian-of-groves-and-gardens", predicate: [{ nor: ["primary-apparition:custodian-of-groves-and-gardens", "secondary-apparition:custodian-of-groves-and-gardens"] }] },
            { label: "pf2e-animist.echo-of-lost-moments", value: "echo-of-lost-moments", predicate: [{ nor: ["primary-apparition:apparition:echo-of-lost-moments", "secondary-apparition:apparition:echo-of-lost-moments"] }] },
            { label: "pf2e-animist.impostor-in-hidden-places", value: "impostor-in-hidden-places", predicate: [{ nor: ["primary-apparition:impostor-in-hidden-places", "secondary-apparition:impostor-in-hidden-places"] }] },
            { label: "pf2e-animist.lurker-in-devouring-dark", value: "lurker-in-devouring-dark", predicate: [{ nor: ["primary-apparition:lurker-in-devouring-dark", "secondary-apparition:lurker-in-devouring-dark"] }] },
            { label: "pf2e-animist.monarch-of-the-fey-courts", value: "monarch-of-the-fey-courts", predicate: [{ nor: ["primary-apparition:monarch-of-the-fey-courts", "secondary-apparition:monarch-of-the-fey-courts"] }] },
            { label: "pf2e-animist.reveler-in-lost-glee", value: "reveler-in-lost-glee", predicate: [{ nor: ["primary-apparition:reveler-in-lost-glee", "secondary-apparition:reveler-in-lost-glee"] }] },
            { label: "pf2e-animist.shepherd-of-errant-winds", value: "shepherd-of-errant-winds", predicate: [{ nor: ["primary-apparition:shepherd-of-errant-winds", "secondary-apparition:shepherd-of-errant-winds"] }] },
            { label: "pf2e-animist.speaker-in-sibilance", value: "speaker-in-sibilance", predicate: [{ nor: ["primary-apparition:speaker-in-sibilance", "secondary-apparition:speaker-in-sibilance"] }] },
            { label: "pf2e-animist.stalker-in-darkened-boughs", value: "stalker-in-darkened-boughs", predicate: [{ nor: ["primary-apparition:stalker-in-darkened-boughs", "secondary-apparition:stalker-in-darkened-boughs"] }] },
            { label: "pf2e-animist.steward-of-stone-and-fire", value: "steward-of-stone-and-fire", predicate: [{ nor: ["primary-apparition:steward-of-stone-and-fire", "secondary-apparition:steward-of-stone-and-fire"] }] },
            { label: "pf2e-animist.vanguard-of-roaring-waters", value: "vanguard-of-roaring-waters", predicate: [{ nor: ["primary-apparition:vanguard-of-roaring-waters", "secondary-apparition:vanguard-of-roaring-waters"] }] },
            { label: "pf2e-animist.witness-to-ancient-battles", value: "witness-to-ancient-battles", predicate: [{ nor: ["primary-apparition:witness-to-ancient-battles", "secondary-apparition:witness-to-ancient-battles"] }] },
            { label: "pf2e-animist.nomad-of-rolling-sands", value: "nomad-of-rolling-sands", predicate: [{ nor: ["primary-apparition:nomad-of-rolling-sands", "secondary-apparition:nomad-of-rolling-sands"] }] }, //3rd instance
            { label: "Dispersed", value: "dispersed" }], toggleable: !0, alwaysActive: !0, label: "pf2e-animist.third-label", value: !0, selection: "dispersed"
    },
    C = {
        key: "RollOption",
        option: "fourth-apparition", suboptions: [{ label: "pf2e-animist.crafter-in-the-vault", value: "crafter-in-the-vault", predicate: [{ nor: ["primary-apparition:crafter-in-the-vault", "secondary-apparition:crafter-in-the-vault", "third-apparition:crafter-in-the-vault"] }] },
            { label: "pf2e-animist.custodian-of-groves-and-gardens", value: "custodian-of-groves-and-gardens", predicate: [{ nor: ["primary-apparition:custodian-of-groves-and-gardens", "secondary-apparition:custodian-of-groves-and-gardens", "third-apparition:custodian-of-groves-and-gardens"] }] },
            { label: "pf2e-animist.echo-of-lost-moments", value: "echo-of-lost-moments", predicate: [{ nor: ["primary-apparition:apparition:echo-of-lost-moments", "secondary-apparition:apparition:echo-of-lost-moments", "third-apparition:apparition:echo-of-lost-moments"] }] },
            { label: "pf2e-animist.impostor-in-hidden-places", value: "impostor-in-hidden-places", predicate: [{ nor: ["primary-apparition:impostor-in-hidden-places", "secondary-apparition:impostor-in-hidden-places", "third-apparition:impostor-in-hidden-places"] }] },
            { label: "pf2e-animist.lurker-in-devouring-dark", value: "lurker-in-devouring-dark", predicate: [{ nor: ["primary-apparition:lurker-in-devouring-dark", "secondary-apparition:lurker-in-devouring-dark", "third-apparition:lurker-in-devouring-dark"] }] },
            { label: "pf2e-animist.monarch-of-the-fey-courts", value: "monarch-of-the-fey-courts", predicate: [{ nor: ["primary-apparition:monarch-of-the-fey-courts", "secondary-apparition:monarch-of-the-fey-courts", "third-apparition:monarch-of-the-fey-courts"] }] },
            { label: "pf2e-animist.reveler-in-lost-glee", value: "reveler-in-lost-glee", predicate: [{ nor: ["primary-apparition:reveler-in-lost-glee", "secondary-apparition:reveler-in-lost-glee", "third-apparition:reveler-in-lost-glee"] }] },
            { label: "pf2e-animist.shepherd-of-errant-winds", value: "shepherd-of-errant-winds", predicate: [{ nor: ["primary-apparition:shepherd-of-errant-winds", "secondary-apparition:shepherd-of-errant-winds", "third-apparition:shepherd-of-errant-winds"] }] },
            { label: "pf2e-animist.speaker-in-sibilance", value: "speaker-in-sibilance", predicate: [{ nor: ["primary-apparition:speaker-in-sibilance", "secondary-apparition:speaker-in-sibilance", "third-apparition:speaker-in-sibilance"] }] },
            { label: "pf2e-animist.stalker-in-darkened-boughs", value: "stalker-in-darkened-boughs", predicate: [{ nor: ["primary-apparition:stalker-in-darkened-boughs", "secondary-apparition:stalker-in-darkened-boughs", "third-apparition:stalker-in-darkened-boughs"] }] },
            { label: "pf2e-animist.steward-of-stone-and-fire", value: "steward-of-stone-and-fire", predicate: [{ nor: ["primary-apparition:steward-of-stone-and-fire", "secondary-apparition:steward-of-stone-and-fire", "third-apparition:steward-of-stone-and-fire"] }] },
            { label: "pf2e-animist.vanguard-of-roaring-waters", value: "vanguard-of-roaring-waters", predicate: [{ nor: ["primary-apparition:vanguard-of-roaring-waters", "secondary-apparition:vanguard-of-roaring-waters", "third-apparition:vanguard-of-roaring-waters"] }] },
            { label: "pf2e-animist.witness-to-ancient-battles", value: "witness-to-ancient-battles", predicate: [{ nor: ["primary-apparition:witness-to-ancient-battles", "secondary-apparition:witness-to-ancient-battles", "third-apparition:witness-to-ancient-battles"] }] },
            { label: "pf2e-animist.nomad-of-rolling-sands", value: "nomad-of-rolling-sands", predicate: [{ nor: ["primary-apparition:nomad-of-rolling-sands", "secondary-apparition:nomad-of-rolling-sands", "third-apparition:nomad-of-rolling-sands"] }] }, //4th instance
            { label: "pf2e-animist.dispersed", value: "dispersed" }], toggleable: !0, alwaysActive: !0, label: "pf2e-animist.fourth-label", value: !0, selection: "dispersed"},
    d = "pf2e-animist-g1",
    y = {
        "crafter-in-the-vault": ["Architecture", "Engineering"],
        "custodian-of-groves-and-gardens": ["Farming", "Herbalism"],
        "echo-of-lost-moments": ["Fortune-Telling", "Genealogy"],
        "impostor-in-hidden-places": ["Fortune-Telling", "Underworld"],
        "lurker-in-devouring-dark": ["Ocean", "Sailing"],
        "monarch-of-the-fey-courts": ["Art", "Fey"],
        "reveler-in-lost-glee": ["Circus", "Fortune-Telling"],
        "shepherd-of-errant-winds": ["Sailing", "Scouting"],
        "speaker-in-sibilance": ["Fortune-Telling", "Mountain"],
        "stalker-in-darkened-boughs": ["Forest", "Hunting"],
        "steward-of-stone-and-fire": ["Mountain", "Volcano"],
        "vanguard-of-roaring-waters": ["Mountain", "River"],
        "witness-to-ancient-battles": ["Battlegrounds", "Heraldry"],
        "nomad-of-rolling-sands": ["Desert", "Scouting"] //skills
    },
    l = {
        "Compendium.pf2e.classfeatures.Item.csrF8UOWPl1rr6st": "crafter-in-the-vault",
        "Compendium.pf2e.classfeatures.Item.EyRHVD4h2eZYIsk5": "custodian-of-groves-and-gardens",
        "Compendium.pf2e.classfeatures.Item.UbOFa3BBHO8HwLJR": "echo-of-lost-moments",
        "Compendium.pf2e.classfeatures.Item.Gss5cYmRySgi1UxP": "impostor-in-hidden-places",
        "Compendium.pf2e.classfeatures.Item.NNVkvA9fmyFy68ag": "lurker-in-devouring-dark",
        "Compendium.pf2e.classfeatures.Item.95maDg6AsCTLPAmS": "monarch-of-the-fey-courts",
        "Compendium.pf2e.classfeatures.Item.9PYHXFMmbHyp4aTL": "reveler-in-lost-glee",
        "Compendium.pf2e.classfeatures.Item.aFVxfp7uQ0ac87GN": "shepherd-of-errant-winds",
        "Compendium.pf2e.classfeatures.Item.2XlUg9JXtwnSbWOY": "speaker-in-sibilance",
        "Compendium.pf2e.classfeatures.Item.ImJ09rEZW5WtS26L": "stalker-in-darkened-boughs",
        "Compendium.pf2e.classfeatures.Item.ILGq8LQBnwsAz2jK": "steward-of-stone-and-fire",
        "Compendium.pf2e.classfeatures.Item.M3q0KIyuMvSgUZH7": "vanguard-of-roaring-waters",
        "Compendium.pf2e.classfeatures.Item.k9P2mXRjyy5X24rH": "witness-to-ancient-battles",
        "Compendium.world.mad-science-of-items.Item.KxnCmVyq1eNnTrqU": "nomad-of-rolling-sands" // identification
    },
    g = {
        "crafter-in-the-vault": "Compendium.pf2e.spells-srd.Item.rzcXUF5YmJYxgxEa",
        "custodian-of-groves-and-gardens": "Compendium.pf2e.spells-srd.Item.w4M6Vqvq8k6MOFvj",
        "echo-of-lost-moments": "Compendium.pf2e.spells-srd.Item.FZMVLL7HvasjiM6D",
        "impostor-in-hidden-places": "Compendium.pf2e.spells-srd.Item.t1e3U2eluRsp2izf",
        "lurker-in-devouring-dark": "Compendium.pf2e.spells-srd.Item.wTldMJx0vyBAehrI",
        "monarch-of-the-fey-courts": "Compendium.pf2e.spells-srd.Item.SAmyaiVKTDrUNjot",
        "reveler-in-lost-glee": "Compendium.pf2e.spells-srd.Item.cuKVbWWNzJj1GDpZ",
        "shepherd-of-errant-winds": "Compendium.pf2e.spells-srd.Item.x2Gf3lt64eoMocMd",
        "speaker-in-sibilance": "Compendium.pf2e.spells-srd.Item.h2DLv8TQV0Z83tQp",
        "stalker-in-darkened-boughs": "Compendium.pf2e.spells-srd.Item.BhJtCTLbngvZm8EA",
        "steward-of-stone-and-fire": "Compendium.pf2e.spells-srd.Item.PrlR2sLWeiuTcPF2",
        "vanguard-of-roaring-waters": "Compendium.pf2e.spells-srd.Item.ew4ToaTU3o8ahKio",
        "witness-to-ancient-battles": "Compendium.pf2e.spells-srd.Item.X4On99Nti8gjWywG",
        "nomad-of-rolling-sands": "Compendium.pf2e.spells-srd.Item.cOjlzWerBwbPWVkX" //vessel spell
    },
    b = {
        "crafter-in-the-vault": ["Compendium.pf2e.spells-srd.Item.AUctDF2fqPZN2w4W",
            "Compendium.pf2e.spells-srd.Item.dINQzhqGmIsqGMUY",
            "Compendium.pf2e.spells-srd.Item.6Ot4N22t5tPD51BO",
            "Compendium.pf2e.spells-srd.Item.AMEu5zzLN7uCX645",
            "Compendium.pf2e.spells-srd.Item.TUj8eugNqAvB1vVR",
            "Compendium.pf2e.spells-srd.Item.oXeEbcUdgJGWHGEJ",
            "Compendium.pf2e.spells-srd.Item.CB5TlGv5ZghtMifi",
            "Compendium.pf2e.spells-srd.Item.dKWc83KKiXoIJkhp",
            "Compendium.pf2e.spells-srd.Item.89Hj5QuqvcwVXcqj",
            "Compendium.pf2e.spells-srd.Item.KPDHmmjJiw7PhTYF"],

        "custodian-of-groves-and-gardens": [
            "Compendium.pf2e.spells-srd.Item.uZK2BYzPnxUBnDjr",
            "Compendium.pf2e.spells-srd.Item.K9gI08enGtmih5X1",
            "Compendium.pf2e.spells-srd.Item.C0D2eqzTAhiKm4j9",
            "Compendium.pf2e.spells-srd.Item.IFuEzfmmWyNwVbhY",
            "Compendium.pf2e.spells-srd.Item.onjZCEHs3JJJRTD0",
            "Compendium.pf2e.spells-srd.Item.SwUiVavHKMWG7t5K",
            "Compendium.pf2e.spells-srd.Item.x5rGOmhDRDVQPrnW",
            "Compendium.pf2e.spells-srd.Item.HES5jvGiNZZnJycK",
            "Compendium.pf2e.spells-srd.Item.4MOew29Z1oCX8O28",
            "Compendium.pf2e.spells-srd.Item.Tc5NLaMu71vrGTJQ"
        ],

        "echo-of-lost-moments": [
            "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
            "Compendium.pf2e.spells-srd.Item.rerNA6YZsdxuJYt3",
            "Compendium.pf2e.spells-srd.Item.9HpwDN4MYQJnW0LG",
            "Compendium.pf2e.spells-srd.Item.B3eLlbaPxOYHcs1o",
            "Compendium.pf2e.spells-srd.Item.Jmxru8zMdYMRuO5n",
            "Compendium.pf2e.spells-srd.Item.Ucf8eynbZMfUucjE",
            "Compendium.pf2e.spells-srd.Item.0XP2XOxT9VSiXFDr",
            "Compendium.pf2e.spells-srd.Item.rsZ5c0AUyywe5yoK",
            "Compendium.pf2e.spells-srd.Item.Oj1PJBMQD9vuwCv7",
            "Compendium.pf2e.spells-srd.Item.qsNeG9KZpODSACMq"
        ],

        "impostor-in-hidden-places": [
            "Compendium.pf2e.spells-srd.Item.pwzdSlJgYqN7bs2w",
            "Compendium.pf2e.spells-srd.Item.6ZIKB0151LUR19Rw",
            "Compendium.pf2e.spells-srd.Item.XXqE1eY3w3z6xJCB",
            "Compendium.pf2e.spells-srd.Item.EoKBlgf6Smt8opaU",
            "Compendium.pf2e.spells-srd.Item.OM5NeD7a1CYNqy8S",
            "Compendium.pf2e.spells-srd.Item.m4Mc5XbdML92BKOE",
            "Compendium.pf2e.spells-srd.Item.WPXzPl7YbMEIGWfi",
            "Compendium.pf2e.spells-srd.Item.vPWMEyVTreMOoFnm",
            "Compendium.pf2e.spells-srd.Item.wfleiawxsfhpRRwf",
            "Compendium.pf2e.spells-srd.Item.MJx7DmjsWYzDZ3a4"
        ],

        "lurker-in-devouring-dark": [
            "Compendium.pf2e.spells-srd.Item.thAHF1zxNplLCJPO",
            "Compendium.pf2e.spells-srd.Item.k34hDOfIIMAxNL4a",
            "Compendium.pf2e.spells-srd.Item.9h9YCncqah6VNsKf",
            "Compendium.pf2e.spells-srd.Item.oUDNCArkQTdhllxD",
            "Compendium.pf2e.spells-srd.Item.rwWtpZpkNYvypknx",
            "Compendium.pf2e.spells-srd.Item.R5FHRv7VqyRnxg2t",
            "Compendium.pf2e.spells-srd.Item.R5r4vtmlvOA8hDiF",
            "Compendium.pf2e.spells-srd.Item.0EzLXIpPPH0LOKqt",
            "Compendium.pf2e.spells-srd.Item.C2GYCH3TtUFqPfdX",
            "Compendium.pf2e.spells-srd.Item.4WS7HrFjwNvTn8T2"
        ],

        "monarch-of-the-fey-courts": [
            "Compendium.pf2e.spells-srd.Item.uZK2BYzPnxUBnDjr",
            "Compendium.pf2e.spells-srd.Item.vLA0q0WOK2YPuJs6",
            "Compendium.pf2e.spells-srd.Item.Mt6ZzkVX8Q4xigFq",
            "Compendium.pf2e.spells-srd.Item.IihxWhRfpsBgQ5jS",
            "Compendium.pf2e.spells-srd.Item.qwlh6aDgi86U3Q7H",
            "Compendium.pf2e.spells-srd.Item.U58aQWJ47VrI36yP",
            "Compendium.pf2e.spells-srd.Item.OsOhx3TGIZ7AhD0P",
            "Compendium.pf2e.spells-srd.Item.O6VQC1Bs4aSYDa6R",
            "Compendium.pf2e.spells-srd.Item.Jvyy6oVIQsD34MHB",
            "Compendium.pf2e.spells-srd.Item.FmNDwqMEjeTEGPrY"
        ],

        "reveler-in-lost-glee": [
            "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
            "Compendium.pf2e.spells-srd.Item.UKsIOWmMx4hSpafl",
            "Compendium.pf2e.spells-srd.Item.tlSE7Ly8vi1Dgddv",
            "Compendium.pf2e.spells-srd.Item.K2WpC3FFoHrqX9Q5",
            "Compendium.pf2e.spells-srd.Item.LiGbewa9pO0yjbsY",
            "Compendium.pf2e.spells-srd.Item.Ucf8eynbZMfUucjE",
            "Compendium.pf2e.spells-srd.Item.RQjSQVZRG497cJhX",
            "Compendium.pf2e.spells-srd.Item.8kJbiBEjMWG4VUjs",
            "Compendium.pf2e.spells-srd.Item.Oj1PJBMQD9vuwCv7",
            "Compendium.pf2e.spells-srd.Item.FEsuyf203wTNE2et"
        ],

        "shepherd-of-errant-winds": [
            "Compendium.pf2e.spells-srd.Item.1Yoipc5jNcMehtEW",
            "Compendium.pf2e.spells-srd.Item.KcLVELhCUcKXxiKE",
            "Compendium.pf2e.spells-srd.Item.jlOAXuIOM3YxZKmn",
            "Compendium.pf2e.spells-srd.Item.it4ZsAi6XgvGcodc",
            "Compendium.pf2e.spells-srd.Item.V8wXOsoejQhe6CyG",
            "Compendium.pf2e.spells-srd.Item.Ek5XI0aEdZhBgm21",
            "Compendium.pf2e.spells-srd.Item.WPXzPl7YbMEIGWfi",
            "Compendium.pf2e.spells-srd.Item.kk7JKox6MdGAWmCH",
            "Compendium.pf2e.spells-srd.Item.wi405lBjPcbF1DeR",
            "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx"
        ],

        "speaker-in-sibilance": [
            "Compendium.pf2e.spells-srd.Item.D7ZEhTNIDWDLC2J4",
            "Compendium.pf2e.spells-srd.Item.6ZIKB0151LUR19Rw",
            "Compendium.pf2e.spells-srd.Item.CQb8HtQ1BPeZmu9h",
            "Compendium.pf2e.spells-srd.Item.ZYoC630tNGutgbE0",
            "Compendium.pf2e.spells-srd.Item.wLWMswY7aBHEFTRb",
            "Compendium.pf2e.spells-srd.Item.xFp4EwVcYwSG336t",
            "Compendium.pf2e.spells-srd.Item.znv4ECL7ZtuiagtA",
            "Compendium.pf2e.spells-srd.Item.O6VQC1Bs4aSYDa6R",
            "Compendium.pf2e.spells-srd.Item.y2cQYLr5mljDSu1G",
            "Compendium.pf2e.spells-srd.Item.FmNDwqMEjeTEGPrY"
        ],

        "stalker-in-darkened-boughs": [
            "Compendium.pf2e.spells-srd.Item.MPxbKoR54gkYkqLO",
            "Compendium.pf2e.spells-srd.Item.EE7Q5BHIrfWNCPtT",
            "Compendium.pf2e.spells-srd.Item.cB17yFc9456Pyfec",
            "Compendium.pf2e.spells-srd.Item.KsWhliKfUs3IpW3c",
            "Compendium.pf2e.spells-srd.Item.VuPDHoVEPLbMfCJC",
            "Compendium.pf2e.spells-srd.Item.YtesyvfAIwXOqISq",
            "Compendium.pf2e.spells-srd.Item.JbAcSLu62TU1OgNF",
            "Compendium.pf2e.spells-srd.Item.bVtkBJvGLP69qVGI",
            "Compendium.pf2e.spells-srd.Item.8AMvNVOUEtxBCDvJ",
            "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx"
        ],

        "steward-of-stone-and-fire": [
            "Compendium.pf2e.spells-srd.Item.6DfLZBl8wKIV03Iq",
            "Compendium.pf2e.spells-srd.Item.HokKyQl5g655xx9U",
            "Compendium.pf2e.spells-srd.Item.v89KwyaBd6g5rWVS",
            "Compendium.pf2e.spells-srd.Item.sxQZ6yqTn0czJxVd",
            "Compendium.pf2e.spells-srd.Item.IarZrgCeaiUqOuRu",
            "Compendium.pf2e.spells-srd.Item.kOa055FIrO9Smnya",
            "Compendium.pf2e.spells-srd.Item.znv4ECL7ZtuiagtA",
            "Compendium.pf2e.spells-srd.Item.O7ZEqWjwdKyo2CUv",
            "Compendium.pf2e.spells-srd.Item.x7SPrsRxGb2Vy2nu",
            "Compendium.pf2e.spells-srd.Item.jrBa9deU2ULFWvSl"
        ],

        "vanguard-of-roaring-waters": [
            "Compendium.pf2e.spells-srd.Item.zhDIiQlJmrd4UDNC",
            "Compendium.pf2e.spells-srd.Item.jfVCuOpzC6mUrf6f",
            "Compendium.pf2e.spells-srd.Item.9XHmC2JgTUIQ1CCm",
            "Compendium.pf2e.spells-srd.Item.T4QKmtYPeCgYxVGe",
            "Compendium.pf2e.spells-srd.Item.Y3G6Y6EDgCY0s3fq",
            "Compendium.pf2e.spells-srd.Item.zfn5RqAdF63neqpP",
            "Compendium.pf2e.spells-srd.Item.K2bTUhucPyhXlzjw",
            "Compendium.pf2e.spells-srd.Item.smiVuoFMSgY2FTOO",
            "Compendium.pf2e.spells-srd.Item.0fjz8qc9NfkmWmJZ",
            "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx"
        ],

        "witness-to-ancient-battles": [
            "Compendium.pf2e.spells-srd.Item.TVKNbcgTee19PXZR",
            "Compendium.pf2e.spells-srd.Item.Gb7SeieEvd0pL2Eh",
            "Compendium.pf2e.spells-srd.Item.wzctak6BxOW8xvFV",
            "Compendium.pf2e.spells-srd.Item.AMEu5zzLN7uCX645",
            "Compendium.pf2e.spells-srd.Item.8M03UxGXjYyDFAoy",
            "Compendium.pf2e.spells-srd.Item.hghGRzOSzEl4UXdS",
            "Compendium.pf2e.spells-srd.Item.0XP2XOxT9VSiXFDr",
            "Compendium.pf2e.spells-srd.Item.AlbpWWN87yGegoAF",
            "Compendium.pf2e.spells-srd.Item.qlxM7Ik3uUeUIOcv",
            "Compendium.pf2e.spells-srd.Item.ZqmP9gijBmK7y8Xy"
        ],

        "nomad-of-rolling-sands": [ //Spells
            "Compendium.pf2e.spells-srd.Item.sX2g6WFSQPNW9jzx",
            "Compendium.pf2e.spells-srd.Item.f9m9DayyGy3meqUX",
            "Compendium.pf2e.spells-srd.Item.d18m4AAaxJQqUEh2",
            "Compendium.pf2e.spells-srd.Item.10siFBMF4pIDhVmf",
            "Compendium.pf2e.spells-srd.Item.ma3sndEAZdz0Cy2H",
            "Compendium.pf2e.spells-srd.Item.RCbLd7dfquHnuvrZ",
            "Compendium.pf2e.spells-srd.Item.9W2Qv0wXLg6tQg3y",
            "Compendium.pf2e.spells-srd.Item.a3aQxCpoj1q1NQxC",
            "Compendium.pf2e.spells-srd.Item.M0jQlpQYUr0pp2Sv",
            "Compendium.pf2e.spells-srd.Item.HHCgEEkeeShVQf8d"
        ]
    },

    w = { _id: "", img: "systems/pf2e/icons/default-icons/lore.svg", name: "", flags: {}, system: { proficient: { value: 1 } }, type: "lore" }, 
   
    v = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [2, 2, 2, 1, 1, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
        [2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
        [2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
        [2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
        [2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 1, 1]
        ],
        
        
    k = { _id: "", img: "systems/pf2e/icons/default-icons/spellcastingEntry.svg", name: "Apparition Attunement", system: { ability: { value: "wis" }, spelldc: { value: 0, dc: 0 }, tradition: { value: "divine" }, prepared: { value: "spontaneous" }, showSlotlessLevels: { value: !1 }, proficiency: { value: 1, slug: "" }, slots: { slot0: { prepared: [], value: 0, max: 0 }, slot1: { prepared: [], value: 1, max: 1 }, slot2: { prepared: [], value: 0, max: 0 }, slot3: { prepared: [], value: 0, max: 0 }, slot4: { prepared: [], value: 0, max: 0 }, slot5: { prepared: [], value: 0, max: 0 }, slot6: { prepared: [], value: 0, max: 0 }, slot7: { prepared: [], value: 0, max: 0 }, slot8: { prepared: [], value: 0, max: 0 }, slot9: { prepared: [], value: 0, max: 0 }, slot10: { prepared: [], value: 0, max: 0 }, slot11: { prepared: [], value: 0, max: 0 } }, autoHeightenLevel: { value: null } }, type: "spellcastingEntry", flags: {} }, 
    O = { _id: "", img: "systems/pf2e/icons/default-icons/spellcastingEntry.svg", name: "Vessel Spells", system: { ability: { value: "wis" }, spelldc: { value: 0, dc: 0 }, tradition: { value: "divine" }, prepared: { value: "focus" }, showSlotlessLevels: { value: !0 }, proficiency: { value: 1, slug: "" }, slots: { slot0: { prepared: [], value: 0, max: 0 }, slot1: { prepared: [], value: 0, max: 0 }, slot2: { prepared: [], value: 0, max: 0 }, slot3: { prepared: [], value: 0, max: 0 }, slot4: { prepared: [], value: 0, max: 0 }, slot5: { prepared: [], value: 0, max: 0 }, slot6: { prepared: [], value: 0, max: 0 }, slot7: { prepared: [], value: 0, max: 0 }, slot8: { prepared: [], value: 0, max: 0 }, slot9: { prepared: [], value: 0, max: 0 }, slot10: { prepared: [], value: 0, max: 0 }, slot11: { prepared: [], value: 0, max: 0 } }, autoHeightenLevel: { value: null } }, type: "spellcastingEntry", flags: {} }, 
    x = { key: "ActiveEffectLike", mode: "override", path: "system.resources.focus.max", priority: 10, value: 1 }, o = ["primary-apparition:", "secondary-apparition:", "third-apparition:", "fourth-apparition:"]; async function S(e) { let { entry: t, focus: a } = await E(e); await T(e, t, a); let i = await A(e); await L(t, i); let s = e.getRollOptions(); await P(a, e.level >= 9 && s.includes("feature:medium"), s) } function R(e) { let t = e.items.find(s => s.sourceId === "Compendium.pf2e.classfeatures.Item.AHMjKkIx21AoMc9W")?.name, a = e.itemTypes.spellcastingEntry.find(s => s.name === "Apparition Attunement" || s.name === t), i = e.itemTypes.spellcastingEntry.find(s => s.name === "Vessel Spells" || s.name === game.i18n.localize("pf2e-dailies.animist.spellcasting.focus")); return { entry: a, focus: i } } async function E(e) { let { entry: t, focus: a } = R(e); if (!t) { let i = foundry.utils.deepClone(k); Object.keys(i.system.slots).filter(r => r !== "slot0" && r !== "slot11").forEach((r, p) => { i.system.slots[r].value = v[e.level - 1][p], i.system.slots[r].max = v[e.level - 1][p] }), i._id = foundry.utils.randomID(), i.flags[d] = { generated: !0 }; let s = e.items.find(r => r.sourceId === "Compendium.pf2e.classfeatures.Item.AHMjKkIx21AoMc9W")?.name; s && (i.name = s), t = (await e.createEmbeddedDocuments("Item", [i]))[0] } if (!a && e?.class?.slug === "animist") { let i = foundry.utils.deepClone(O); i._id = foundry.utils.randomID(), i.flags[d] = { generated: !0 }, game.modules.get("pf2e-dailies")?.active && (i.name = game.i18n.localize("pf2e-dailies.animist.spellcasting.focus")), a = (await e.createEmbeddedDocuments("Item", [i]))[0] } return { entry: t, focus: a } } async function T(e, t, a) { let i = [...e.itemTypes.lore.filter(s => s?.flags?.[d]?.generated).map(s => s.id), ...e.itemTypes.lore.filter(s => s?.flags?.["pf2e-dailies"]?.temporary).map(s => s.id), ...e.itemTypes.spell.filter(s => s.system?.location?.value === t?.id && t).map(s => s.id), ...e.itemTypes.spell.filter(s => a && s.system?.location?.value === a?.id).map(s => s.id)]; await e.deleteEmbeddedDocuments("Item", i) } async function A(e) { let t = e.getRollOptions().filter(i => o.some(s => i.startsWith(s))).map(i => i.replace(new RegExp(`${o.join("|")}`, "i"), "")).map(i => y[i] || []).flat(), a = t.map(i => { let s = foundry.utils.deepClone(w); return s._id = foundry.utils.randomID(), s.name = `${i} Lore`, s.flags[d] = { generated: !0 }, e.level >= 16 ? s.system.proficient.value = 3 : e.level >= 8 && (s.system.proficient.value = 2), s }); return await e.createEmbeddedDocuments("Item", a), ui.notifications.info(`Lores were changed for ${e.name}`), t } async function m(e, t, a = !0) { let i = (await fromUuid(e)).toObject(); return i.system.location.value = t.id, game.settings.get(d, "signatureSpell") && a && (i.system.location.signature = !0), i } async function L(e, t) { let a = e.actor.getRollOptions(), i = a?.includes("class:animist") ? Math.ceil(e.actor.level / 2) : 0, s = a.filter(p => o.some(n => p.startsWith(n))).map(p => p.replace(new RegExp(`${o.join("|")}`, "i"), "")).map(p => b[p] || []), r = []; for (let p of s) for (let n = 0; n < p.length && !(n > i); n++)r.push(await m(p[n], e, n !== 0)); i >= 10 && r.push(await m("Compendium.pf2e.spells-srd.Item.ckUOoqOM7Kg7VqxB", e, !1)), a.includes("feat:embodiment-of-the-balance") && (r.push(await m("Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs", e)), r.push(await m("Compendium.pf2e.spells-srd.Item.wdA52JJnsuQWeyqz", e))), a.includes("feat:walk-the-wilds") && r.push(await m("Compendium.pf2e.spells-srd.Item.wp09USMB3GIW1qbp", e)), a.includes("feat:wind-seeker") && r.push(await m("Compendium.pf2e.spells-srd.Item.NzXpEzcZAjuDTZjK", e)), a.includes("feat:monstrous-inclinations") && (t.includes("Forest") || t.includes("Ocean")) && r.push(await m("Compendium.pf2e.spells-srd.Item.8AMvNVOUEtxBCDvJ", e)), await e.actor.createEmbeddedDocuments("Item", r), ui.notifications.info(`Spells were changed for ${e.actor.name}`) } async function P(e, t, a) { if (!e) return; let i = e.actor.getRollOptions().filter(s => s.startsWith("primary-apparition:")).map(s => s.replace(new RegExp(`${o.join("|")}`, "i"), "")).map(s => g[s]).find(s => s); if (i && (i = (await fromUuid(i)).toObject(), i.system.location.value = e.id, await e.actor.createEmbeddedDocuments("Item", [i])), t) { let s = e.actor.getRollOptions().filter(r => r.startsWith("secondary-apparition:")).map(r => r.replace(new RegExp(`${o.join("|")}`, "i"), "")).map(r => g[r]).find(r => r); s && (s = (await fromUuid(s)).toObject(), s.system.location.value = e.id, await e.actor.createEmbeddedDocuments("Item", [s])) } if (a.includes("feat:circle-of-spirits")) { let s = a.filter(n => o.some(f => n.startsWith(f))).map(n => n.replace(new RegExp(`${o.join("|")}`, "i"), "")).filter(n => n !== "dispersed").length, r = e.actor.itemTypes.spell.filter(n => n?.system?.location?.value === e.id).length, p = foundry.utils.deepClone(x); p.value = Math.max(Math.max(s, r), 1), e.update({ "system.rules": [p] }) } } Hooks.on("pf2e.restForTheNight", async e => { if (game.modules.get("pf2e-dailies")?.active || !e) return; let t = e.getRollOptions(); if (!t.includes("class:animist") && !t.includes("feat:animist-dedication")) return; let { entry: a, focus: i } = R(e); await T(e, a, i), a && await a.delete(), i && await i.delete(); let s = e.itemTypes.feat.find(n => n.slug === "apparition-attunement"), 
    r = e.itemTypes.feat.find(n => n.slug === "third-apparition"), p = e.itemTypes.feat.find(n => n.slug === "fourth-apparition"); s && (e.toggleRollOption("all", "primary-apparition", s.id, !0, "dispersed"), e.toggleRollOption("all", "secondary-apparition", s.id, !0, "dispersed")), r && e.toggleRollOption("all", "third-apparition", r.id, !0, "dispersed"), p && e.toggleRollOption("all", "fourth-apparition", p.id, !0, "dispersed") }); Hooks.on("renderCharacterSheetPF2e", (e, t) => {
    if (!e.object || !e.object.isOwner) return; let a = e.object.getRollOptions(); if (!a.includes("class:animist") && !a.includes("feat:animist-dedication")) return; let i = $(`<a class="roll-icon" data-tooltip="Apply changes of Apparitions"><i class="fa-solid fa-ghost"></i></a>`);
    i.on("click",s=>S(e.object)),t.find("aside .sidebar .hp-small").append(i)});Hooks.once("init",()=>{game.settings.register(d,"signatureSpell",{name:"All Apparition spells are signature spells",hint:"",scope:"world",config:!0,default:!0,type:Boolean})});Hooks.once("setup",()=>{game.modules.get(d).macros={applyChanges:S}});Hooks.on("preCreateItem",e=>{e?.sourceId==="Compendium.pf2e.classfeatures.Item.AHMjKkIx21AoMc9W"?e.updateSource({"system.rules":[c,I,...e.system.rules]}):e?.sourceId==="Compendium.pf2e.classfeatures.Item.bRAjde9LlavcOUuM"?e.updateSource({"system.rules":[h,...e.system.rules]}):e?.sourceId==="Compendium.pf2e.classfeatures.Item.avLo2Jl3mNWssp0W"?e.updateSource({"system.rules":[C,...e.system.rules]}):e?.sourceId==="Compendium.pf2e.feats-srd.Item.5hFFM5TmhKYSQwtG"&&e.updateSource({"system.rules":[c,...e.system.rules]})});Hooks.on("preUpdateActor",async(e,t)=>{if(t?.flags?.["pf2e-dailies"]?.tooltip&&(t?.flags?.["pf2e-dailies"]?.dailies?.animist||e?.flags?.["pf2e-dailies"]?.dailies?.animist)){let a=t?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition1||e?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition1,i=t?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition2||e?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition2,s=t?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition3||e?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition3,r=t?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition4||e?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition4,p=e.itemTypes.feat.find(u=>u.slug==="apparition-attunement"),n=e.itemTypes.feat.find(u=>u.slug==="third-apparition"),f=e.itemTypes.feat.find(u=>u.slug==="fourth-apparition");p&&l[a]&&l[i]&&(await e.toggleRollOption("all","primary-apparition",p.id,!0,l[a]),await e.toggleRollOption("all","secondary-apparition",p.id,!0,l[i])),n&&l[s]&&await e.toggleRollOption("all","third-apparition",p.id,!0,l[s]),f&&l[r]&&await e.toggleRollOption("all","fourth-apparition",p.id,!0,l[r])}});
