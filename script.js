const PLACEHOLDER = 'assets/templates/weapon-templatebg.png';

const weapons = {
    "accelerator rifle": "assets/primary/accelerator-rifle.png",
    "adjudicator": "assets/primary/adjudicator.png",
    "amendment": "assets/primary/amendment.png",
    "blitzer": "assets/primary/blitzer.png",
    "breaker": "assets/primary/breaker.png",
    "breaker incendiary": "assets/primary/breaker-incendiary.png",
    "breaker spray & pray": "assets/primary/breaker-spray-pray.png",
    "censor": "assets/primary/censor.png",
    "constitution": "assets/primary/constitution.png",
    "cookout": "assets/primary/cookout.png",
    "coyote": "assets/primary/coyote.png",
    "double freedom": "assets/primary/double-freedom.png",
    "deadeye": "assets/primary/deadeye.png",
    "defender": "assets/primary/defender.png",
    "diligence": "assets/primary/diligence.png",
    "diligence counter sniper": "assets/primary/diligence-counter-sniper.png",
    "dominator": "assets/primary/dominator.png",
    "double-edge sickle": "assets/primary/double-edge-sickle.png",
    "eruptor": "assets/primary/eruptor.png",
    "exploding crossbow": "assets/primary/exploding-crossbow.png",
    "gallant": "assets/primary/gallant.png",
    "halt": "assets/primary/halt.png",
    "knight": "assets/primary/knight.png",
    "liberator": "assets/primary/liberator.png",
    "liberator carbine": "assets/primary/liberator-carbine.png",
    "liberator concussive": "assets/primary/liberator-concussive.png",
    "liberator penetrator": "assets/primary/liberator-penetrator.png",
    "m7s smg": "assets/primary/m7s-smg.png",
    "m90a shotgun": "assets/primary/m90a-shotgun.png",
    "ma5c assault rifle": "assets/primary/ma5c-assault-rifle.png",
    "one-two": "assets/primary/one-two.png",
    "pacifier": "assets/primary/pacifier.png",
    "pummeler": "assets/primary/pummeler.png",
    "punisher": "assets/primary/punisher.png",
    "punisher plasma": "assets/primary/punisher-plasma.png",
    "purifier": "assets/primary/purifier.png",
    "reprimand": "assets/primary/reprimand.png",
    "scorcher": "assets/primary/scorcher.png",
    "scythe": "assets/primary/scythe.png",
    "sg-97 shotgun": "assets/primary/sg-97-shotgun.png",
    "sickle": "assets/primary/sickle.png",
    "slugger": "assets/primary/slugger.png",
    "sta-11 smg": "assets/primary/sta-11-smg.png",
    "sta-52 assault rifle": "assets/primary/sta-52-assault-rifle.png",
    "stoker": "assets/primary/stoker.png",
    "suppressor": "assets/primary/suppressor.png",
    "tenderizer": "assets/primary/tenderizer.png",
    "torcher": "assets/primary/torcher.png",
    "trident": "assets/primary/trident.png",
    "variable": "assets/primary/variable.png"
};

const secondarys = {
    "bushwhacker": "assets/secondary/bushwhacker.png",
    "combat hatchet": "assets/secondary/combat-hatchet.png",
    "crisper": "assets/secondary/crisper.png",
    "dagger": "assets/secondary/dagger.png",
    "entrenchment tool": "assets/secondary/entrenchment-tool.png",
    "grenade pistol": "assets/secondary/grenade-pistol.png",
    "loyalist": "assets/secondary/loyalist.png",
    "machete": "assets/secondary/machete.png",
    "missile pistol": "assets/secondary/missile-pistol.png",
    "peacemaker": "assets/secondary/peacemaker.png",
    "pistol": "assets/secondary/pistol.png",
    "redeemer": "assets/secondary/redeemer.png",
    "re-educator": "assets/secondary/re-educator.png",
    "saber": "assets/secondary/saber.png",
    "senator": "assets/secondary/senator.png",
    "stim pistol": "assets/secondary/stim-pistol.png",
    "stun baton": "assets/secondary/stun-baton.png",
    "stun lance": "assets/secondary/stun-lance.png",
    "talon": "assets/secondary/talon.png",
    "ultimatum": "assets/secondary/ultimatum.png",
    "verdict": "assets/secondary/verdict.png",
    "veto": "assets/secondary/veto.png",
    "warrant": "assets/secondary/warrant.png"
};

const throwables = {
    "arc": "assets/throwable/arc.png",
    "dynamite": "assets/throwable/dynamite.png",
    "frag": "assets/throwable/frag.png",
    "gas": "assets/throwable/gas.png",
    "giga grenade": "assets/throwable/giga-grenade.png",
    "high explosive": "assets/throwable/high-explosive.png",
    "impact": "assets/throwable/impact.png",
    "incendiary": "assets/throwable/incendiary.png",
    "incendiary impact": "assets/throwable/incendiary-impact.png",
    "lure mine": "assets/throwable/lure-mine.png",
    "pineapple": "assets/throwable/pineapple.png",
    "pyrotech": "assets/throwable/pyrotech.png",
    "seeker": "assets/throwable/seeker.png",
    "shield": "assets/throwable/shield.png",
    "smoke": "assets/throwable/smoke.png",
    "smokescreen": "assets/throwable/smokescreen.png",
    "stun": "assets/throwable/stun.png",
    "thermite": "assets/throwable/thermite.png",
    "throwing knife": "assets/throwable/throwing-knife.png",
    "urchin": "assets/throwable/urchin.png"
};

const armors = { 
    "acclimated": "assets/armor/acclimated.png",
    "adreno defibrillator": "assets/armor/adreno-defibrillator.png",
    "advanced filtration": "assets/armor/advanced-filtration.png",
    "ballistic padding": "assets/armor/ballistic-padding.png",
    "concussive padding": "assets/armor/concussive-padding.png",
    "democracy protects": "assets/armor/democracy_protects.png",
    "desert stromer": "assets/armor/desert-stromer.png",
    "electrical conduit": "assets/armor/electrical_conduit.png",
    "engineering kit": "assets/armor/engineering_kit.png",
    "extra padding": "assets/armor/extra_padding.png",
    "feet first": "assets/armor/feet-first.png",
    "fortified": "assets/armor/fortified.png",
    "gunslinger": "assets/armor/gunslinger.png",
    "inflammable": "assets/armor/inflammable.png",
    "med kit": "assets/armor/med-kit.png",
    "peak physique": "assets/armor/peak_physique.png",
    "reduced signature": "assets/armor/reduced-signature.png",
    "reinforced epaulettes": "assets/armor/reinforced-epaulettes.png",
    "rock solid": "assets/armor/rock-solid.png",
    "scout": "assets/armor/scout.png",
    "servo assisted": "assets/armor/servo-assisted.png",
    "siege ready": "assets/armor/siege-ready.png",
    "supplementary adrenaline": "assets/armor/supplementary-adrenaline.png",
    "unflinching": "assets/armor/unflinching.png" 
};

const stratagems = {
    "500kg bomb": "assets/stratagems/500kg-bomb.png",
    "airburst rocket launcher": "assets/stratagems/airburst-rocket-launcher.png",
    "anti-material rifle": "assets/stratagems/anti-material-rifle.png",
    "anti-personal minefield": "assets/stratagems/anti-personal-minefeld.png",
    "anti-tank emplacement": "assets/stratagems/anti-tank-emplacement.png",
    "anti-tank mines": "assets/stratagems/anti-tank-mines.png",
    "arc thrower": "assets/stratagems/arc-thrower.png",
    "autocannon": "assets/stratagems/autocannon.png",
    "autocannon sentry": "assets/stratagems/autocannon-sentry.png",
    "ballistic shield": "assets/stratagems/ballistic-shield.png",
    "bastion": "assets/stratagems/bastion.png",
    "belt-fed grenade launcher": "assets/stratagems/belt-fed-grenade-launcher.png",
    "breaching hammer": "assets/stratagems/breaching-hammer.png",
    "breakthrough exosuit": "assets/stratagems/breakthrough-exosuit.png",
    "bulletstorm": "assets/stratagems/bulletstorm.png",
    "c4 pack": "assets/stratagems/c4-pack.png",
    "commando": "assets/stratagems/commando.png",
    "cremator": "assets/stratagems/cremator.png",
    "de-escalator": "assets/stratagems/de-escalator.png",
    "defoliation tool": "assets/stratagems/defoliation-tool.png",
    "directional shield": "assets/stratagems/directional-shield.png",
    "dog breath": "assets/stratagems/dog-breath.png",
    "emancipator exosuit": "assets/stratagems/emancipator-exosuit.png",
    "ems mortar sentry": "assets/stratagems/ems-mortar-sentry.png",
    "epoch": "assets/stratagems/epoch.png",
    "expendable anti-tank": "assets/stratagems/expendable-anti-tank.png",
    "expendable napalm": "assets/stratagems/expendable-napalm.png",
    "fast recon vehicle": "assets/stratagems/fast-recon-vehicle.png",
    "flame sentry": "assets/stratagems/flame-sentry.png",
    "flamethrower": "assets/stratagems/flamethrower.png",
    "gas mines": "assets/stratagems/gas-mines.png",
    "gas mortar sentry": "assets/stratagems/gas-mortar-sentry.png",
    "gatling sentry": "assets/stratagems/gatling-sentry.png",
    "grenade launcher": "assets/stratagems/grenade-launcher.png",
    "grenadier battlement": "assets/stratagems/grenadier-battlement.png",
    "guard dog": "assets/stratagems/guard_dog.png",
    "heavy machine gun": "assets/stratagems/heavy-machine-gun.png",
    "hmg emplacement": "assets/stratagems/hmg-emplacement.png",
    "hot dog": "assets/stratagems/hot-dog.png",
    "hover pack": "assets/stratagems/hover-pack.png",
    "incendiary mines": "assets/stratagems/incendiary mines.png",
    "jump pack": "assets/stratagems/jump-pack.png",
    "k-9": "assets/stratagems/k-9.png",
    "laser cannon": "assets/stratagems/laser-cannon.png",
    "laser sentry": "assets/stratagems/laser-sentry.png",
    "leveler": "assets/stratagems/leveler.png",
    "lumberer exosuit": "assets/stratagems/lumberer-exosuit.png",
    "machine gun": "assets/stratagems/machine-gun.png",
    "machine gun sentry": "assets/stratagems/machine-gun-sentry.png",
    "maxigun": "assets/stratagems/maxigun.png",
    "mortar sentry": "assets/stratagems/mortar-sentry.png",
    "one true flag": "assets/stratagems/one-true-flag.png",
    "orbital 120mm he barrage": "assets/stratagems/orbital-120mm-he-barrage.png",
    "orbital 380mm he barrage": "assets/stratagems/orbital-380mm-he-barrage.png",
    "orbital airburst strike": "assets/stratagems/orbital-airburst-strike.png",
    "orbital gas strike": "assets/stratagems/orbital-gas-strike.png",
    "orbital gatling barrage": "assets/stratagems/orbital-gatling-barrage.png",
    "orbital laser": "assets/stratagems/orbital-laser.png",
    "orbital napalm barrage": "assets/stratagems/orbital-napalm-barrage.png",
    "orbital railcannon strike": "assets/stratagems/orbital-railcannon-strike.png",
    "orbital walking barrage": "assets/stratagems/orbital-walking-barrage.png",
    "patriot exosuit": "assets/stratagems/patriot-exosuit.png",
    "portable hellbomb": "assets/stratagems/portable-hellbomb.png",
    "quasar cannon": "assets/stratagems/quesar-cannon.png",
    "railgun": "assets/stratagems/railgun.png",
    "recoilless rifle": "assets/stratagems/recoilless-rifle.png",
    "rocket sentry": "assets/stratagems/rocket-sentry.png",
    "rover": "assets/stratagems/rover.png",
    "shield generator pack": "assets/stratagems/shield-generator-pack.png",
    "shield generator relay": "assets/stratagems/shield-generator-relay.png",
    "solo silo": "assets/stratagems/solo-silo.png",
    "spear": "assets/stratagems/spear.png",
    "speargun": "assets/stratagems/speargun.png",
    "stalwart": "assets/stratagems/stalwart.png",
    "sterilizer": "assets/stratagems/sterilizer.png",
    "eagle strafing run": "assets/stratagems/strafing-run.png",
    "supply pack": "assets/stratagems/supply-pack.png",
    "tesla tower": "assets/stratagems/tesla-tower.png",
    "warp pack": "assets/stratagems/warp-pack.png",
    "wasp launcher": "assets/stratagems/wasp-launcher.png"
};

const prevSlotValues = {
    primary: '', secondary: '', throwable: '', armor: '',
    strat1: '', strat2: '', strat3: '', strat4: ''
};

const GUIDE_MAX_HEIGHT = 294;

function autoResizeGuide() {
    const ta = document.getElementById('guide-input');
    ta.style.height = 'auto';
    if (ta.scrollHeight <= GUIDE_MAX_HEIGHT) {
        ta.style.height = ta.scrollHeight + 'px';
        ta.style.overflowY = 'hidden';
    } else {
        ta.style.height = GUIDE_MAX_HEIGHT + 'px';
        ta.style.overflowY = 'auto';
    }
}

function updateGuideEntry(oldName, newName) {
    const ta = document.getElementById('guide-input');
    const lines = ta.value ? ta.value.split('\n') : [];
    if (oldName) {
        const idx = lines.findIndex(l => l.startsWith(`- ${oldName}:`));
        if (idx !== -1) {
            if (newName) lines[idx] = `- ${newName}:${lines[idx].slice(`- ${oldName}:`.length)}`;
            else lines.splice(idx, 1);
            ta.value = lines.join('\n');
            autoResizeGuide();
            return;
        }
    }
    if (newName) {
        if (ta.value.length > 0 && !ta.value.endsWith('\n')) ta.value += '\n';
        ta.value += `- ${newName}:`;
    }
    autoResizeGuide();
}

// --- INPUT HANDLERS ---
const setupInput = (id, imgId, list, key) => {
    const el = document.getElementById(id);
    const img = document.getElementById(imgId);
    el.addEventListener('input', () => {
        const val = el.value.trim().toLowerCase();
        const newName = list[val] ? el.value.trim() : '';
        img.src = list[val] || PLACEHOLDER;
        img.closest('td').dataset.tooltip = newName;
        updateGuideEntry(prevSlotValues[key], newName);
        prevSlotValues[key] = newName;
    });
};

setupInput('primary-input', 'primary-img', weapons, 'primary');
setupInput('secondary-input', 'secondary-img', secondarys, 'secondary');
setupInput('throwable-input', 'throwable-img', throwables, 'throwable');
setupInput('armor-input', 'armor-img', armors, 'armor');

for (let i = 1; i <= 4; i++) {
    const input = document.getElementById(`strat${i}-input`);
    const img = document.getElementById(`strat${i}-img`);
    input.addEventListener('input', () => {
        const val = input.value.trim().toLowerCase();
        if (val !== "") {
            for (let j = 1; j <= 4; j++) {
                if (i === j) continue;
                const oVal = document.getElementById(`strat${j}-input`).value.trim().toLowerCase();
                if (oVal === val) { alert("Already equipped!"); input.value = ""; return; }
                if (val.includes("exosuit") && oVal.includes("exosuit")) { alert("Only one Exosuit!"); input.value = ""; return; }
            }
        }
        const name = stratagems[val] ? input.value.trim() : '';
        img.src = stratagems[val] || PLACEHOLDER;
        img.closest('td').dataset.tooltip = name;
        updateGuideEntry(prevSlotValues[`strat${i}`], name);
        prevSlotValues[`strat${i}`] = name;
    });
}

// --- SCREENSHOT LOGIC ---
async function runScreenshot(callback) {
    const ta = document.getElementById('guide-input');
    const area = document.getElementById('screenshot-area');

    const textContent = ta.value;
    const tempDiv = document.createElement('div');
    tempDiv.id = 'guide-input-display';
    const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Eine Zeile = ein eigenes <div>. Robust gegen html2canvas-Eigenheiten
    // mit <br> / white-space: pre-wrap auf GitHub Pages.
    tempDiv.innerHTML = textContent.split('\n').map(line => {
        const safe = escapeHtml(line);
        // Leere Zeile muss trotzdem Höhe haben
        return `<div style="min-height:1.5em;">${safe || '&nbsp;'}</div>`;
    }).join('');
    tempDiv.style.cssText = `
        width: 100%;
        padding: 15px;
        border-radius: 12px;
        border: 1.5px solid #ffe06644;
        background: rgba(24, 26, 32, 0.92);
        color: #f5f5f5;
        font-size: 1rem;
        line-height: 1.5;
        font-family: 'FS Sinclair', 'Segoe UI', Arial, sans-serif;
        word-wrap: break-word;
        box-sizing: border-box;
        text-align: left;
    `;

    const originalDisplay = ta.style.display;
    ta.style.display = 'none';
    ta.parentNode.insertBefore(tempDiv, ta);

    // Bilder laden abwarten
    const imgs = area.querySelectorAll('img');
    await Promise.all([...imgs].map(i => i.complete ? Promise.resolve() : new Promise(r => i.onload = i.onerror = r)));

    setTimeout(() => {
        html2canvas(area, {
            useCORS: true,
            backgroundColor: "#181a20",
            scale: 2,
            // Das verhindert das Abschneiden der Ränder:
            windowWidth: area.scrollWidth,
            windowHeight: area.scrollHeight
        }).then(canvas => {
            tempDiv.remove();
            ta.style.display = originalDisplay;
            callback(canvas);
        });
    }, 100);
}

document.getElementById('screenshot-btn').onclick = () => runScreenshot(c => {
    const a = document.createElement('a');
    a.download = 'hd2-build.png';
    a.href = c.toDataURL();
    a.click();
});

document.getElementById('copy-btn').onclick = function() {
    runScreenshot(c => c.toBlob(b => {
        navigator.clipboard.write([new ClipboardItem({"image/png": b})]);
        const old = this.innerHTML;
        this.innerHTML = "✅ Copied!";
        setTimeout(() => this.innerHTML = old, 2000);
    }));
};

document.getElementById('share-btn').onclick = function() {
    const p = new URLSearchParams();
    ['primary-input', 'secondary-input', 'throwable-input', 'armor-input', 'strat1-input', 'strat2-input', 'strat3-input', 'strat4-input', 'guide-input'].forEach(id => {
        const v = document.getElementById(id).value;
        if (v) p.set(id, v);
    });
    navigator.clipboard.writeText(window.location.origin + window.location.pathname + '?' + p.toString());
    const old = this.innerHTML;
    this.innerHTML = "✅ Link copied!";
    setTimeout(() => this.innerHTML = old, 2000);
};

document.getElementById('guide-input').oninput = autoResizeGuide;
window.onload = () => {
    new URLSearchParams(window.location.search).forEach((v, k) => {
        const el = document.getElementById(k);
        if (el) { el.value = v; el.dispatchEvent(new Event('input')); }
    });
    autoResizeGuide();
};