/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "แฟ้มส่งต่อ||*.torrent||แฟ้มทั้งหมด (*.*)||*.*||"
	, "ตกลง"
	, "ยกเลิก"
	, "พร้อมใช้งาน"
	, "ใช่"
	, "ไม่ใช่"
	, "ปิด"
	, "การตั้งค่า"
	, "ภาษา"
	, "ภาษา:"
	, "ความเป็นส่วนตัว"
	, "ตรวจสอบการปรับปรุงโดยอัตโนมัติ"
	, "ปรับปรุงไปยังรุ่นทดลอง"
	, "ส่งข้อมูลที่ปกปิดชื่อเมื่อกำลังตรวจสอบการปรับปรุง"
	, "เมื่อกำลังดาวน์โหลด"
	, "เพิ่ม .!ut ไปยังแฟ้มที่ยังไม่เสร็จสมบูรณ์"
	, "จัดสรรพื้นที่ล้วงหน้าสำหรับแฟ้มทั้งหมด"
	, "ป้องกันการสแตนด์บายหากมีทอร์เรนต์กำลังทำงานอยู่"
	, "ตัวเลือกการแสดงผล"
	, "ยืนยันเมื่อลบ torrent"
	, "ยืนยันเมื่อลบผู้ส่งต่อ"
	, "ยืนยันเมื่อออกจากโปรแกรม"
	, "สลับสีพื้นหลังรายชื่องาน"
	, "แสดงความเร็วปัจจุบันในไตเติ้ลบาร์"
	, "แสดงขีดจำกัดความเร็วบนแถบสถานะ"
	, "เพิ่มแฟ้มส่งต่อ"
	, "ไม่เริ่มรับแฟ้มโดยอัตโนมัติ"
	, "กระตุ้นหน้าต่างโปรแกรม"
	, "แสดงหน้าต่างรายละเอียดในแฟ้มส่งต่อ"
	, "การกระทำสหรับการคลิกสองครั้ง"
	, "สำหรับการส่งต่อแฟ้มส่งต่อ:"
	, "สำหรับการดาวน์โหลดแฟ้มส่งต่อ:"
	, "ตำแหน่งของแฟ้มที่ได้รับ"
	, "ใส่แฟ้มที่ได้รับใหม่ใน[ค่าพื้นฐาน]:"
	, "แสดงไดอะลอคทุกครั้งเมื่อเพิ่มแฟ้มแบบธรรมดา"
	, "ย้ายแฟ้มที่รับแล้วเสร็จไปยัง:"
	, "ติดป้ายของแฟ้มส่งต่อ"
	, "ย้ายเฉพาะแฟ้มในไดเรคทอรี่รับแฟ้มพื้นฐาน"
	, "ตำแหน่งของ .torrents"
	, "เก็บแฟ้ม .torrent ใน:"
	, "ย้ายแฟ้ม .torrent สำหรับงานที่แล้วเสร็จไป:"
	, "โหลด .torrents จากโดยอัตโนมัติ:"
	, "ลบ .torrents ที่โหลด"
	, "การรอพอร์ต"
	, "พอร์ตที่ใช้งานในการเชื่อมต่อขาเข้า:"
	, "สุ่มพอร์ต"
	, "สุ่มพอร์ตทุกครั้งเมื่อเปิดใช้"
	, "ใช้การส่งต่อพอร์ตด้วย UPnP"
	, "ใช้การส่งต่อพอร์ตด้วย NAT-PMP"
	, "Proxy Server"
	, "ชนิด:"
	, "พร๊อกซี่:"
	, "พอร์ต:"
	, "แสดงตัวผู้ใช้"
	, "ชื่อผู้ใช้:"
	, "รหัสผ่าน:"
	, "แก้ไขปัญหาชื่อโฮสต์ผ่่านทางพร็อกซี"
	, "ใช้ proxy server สำหรับการเชื่อมต่อแบบ peer-to-peer"
	, "เพิ่มข้อยกเว้นไฟร์วอลล์ Windows"
	, "ความเป็นส่วนตัวเชิงพร็อกซี"
	, "ปิดการใช้การมองหา DNS ท้องถิ่นทั้งหมด"
	, "ปิดการใช้คุณลักษณะที่อาจเปิดเผยข้อมูลประจำตัว"
	, "ปิดการเชื่อมต่อที่พร็อกซีไม่สนับสนุน"
	, "การจำกัดอัตราการอัปโหลดทั่วโลก"
	, "ส่งข้อมูลโดยรวมสูงสุด (kB/s): [0: ไม่กำหนด]"
	, "อัตโนมัติ"
	, "?ใช้อัตราส่งข้อมูลนี้เมื่อไม่มีการรับข้อมูล (kB/s):"
	, "การจำกัดอัตราการดาวน์โหลดทั่วโลก"
	, "รับข้อมูลโดยรวมสูงสุด (kB/s): [0: ไม่กำหนด]"
	, "จำนวนการเชื่อมต่อสูงสุด"
	, "จำนวนการเชื่อมต่อสูงสุด (ทั้งหมด):"
	, "จำนวนการเชื่อมต่อสูงสุด (ต่อ torrent):"
	, "จำนวนช่องของการส่งข้อมูลต่อ torrent:"
	, "ใช้ช่องการส่งข้อมูลเพิ่มเมื่อความเร็วส่งข้อมูล < 90%"
	, "Global Rate Limit Options"
	, "นำการจำกัดอัตราไปใช้กับส่วนเสียเปล่าในการขนส่ง"
	, "นำการจำกัดอัตราไปใช้กับการเชื่อมต่อ uTP"
	, "คุณลักษณะ BitTorrent พื้นฐาน"
	, "ใช้งานเครือข่าย DHT"
	, "ขอข้อมูล scrape จากผู้ส่งต่อ"
	, "ใช้งาน DHT สำหรับแฟ้มส่งต่อใหม่"
	, "แลกเปลี่ยนเพียร์กันเอง (Peer Exchange)"
	, "ใช้การหาเพียร์ใกล้เคียง (Local)"
	, "จำกัดแบนด์วิธเพียร์ใกล้เคียง"
	, "IP/ชื่อเครื่อง ที่บอกผู้ส่งต่อ:"
	, "เข้ารหัสโปรโตคอล"
	, "ขาออก:"
	, "ยอมให้มีขาเข้าแบบไม่เข้ารหัส"
	, "เปิดใช้การจัดการความถี่ [uTP]"
	, "เปิดการสนับสนุนผู้ส่งต่อ UDP"
	, "เปิดการใช้การถ่ายโอนตรวจจับ"
	, "การตั้งค่าการตรวจจับ"
	, "ชนิดการจำกัด:"
	, "ความจุความถี่:"
	, "ระยะเวลา (วัน):"
	, "ประวัติการใช้งานสำหรับคาบที่เลือก:"
	, "อัปโหลดแล้ว:"
	, "ดาวน์โหลดแล้ว:"
	, "อัปโหลดแล้ว + ดาวน์โหลดแล้ว:"
	, "คาบเวลา:"
	, "%d วันล่าสุด"
	, "ประวัติล่าสุด"
	, "ตั้งค่าการจัดลำดับ"
	, "จำนวนแฟ้มส่งต่อใช้งานพร้อมกันสูงสุด (ทั้งส่งและรับข้อมูล):"
	, "จำนวนแฟ้มส่งต่อรับข้อมูลพร้อมกันสูงสุด :"
	, "ส่งต่อขณะที่ [ค่าพื้นฐาน]"
	, "อัตราส่วนต่ำสุด (%):"
	, "เวลาส่งต่อต่ำสุด (นาที):"
	, "งานที่ส่งต่อมีความสำคัญมากกว่างานรับข้อมูล"
	, "เมื่อ µTorrent ถึงเป้าหมายความเร็ว"
	, "จำกัดความเร็วส่งข้อมูล: [0: หยุด]"
	, "ใช้ตารางเวลา"
	, "ตารางเวลา"
	, "การตั้งค่าตารางเวลา"
	, "กำหนดอัตราส่งข้อมูลไว้ที่ (kB/s):"
	, "กำหนดอัตรารับข้อมูลไว้ที่ (kB/s):"
	, "ระงับ DHT เมื่อปิด"
	, "ใช้งาน Web UI"
	, "ตรวจสอบสิทธิ์"
	, "ชื่อผู้ใช้:"
	, "รหัสผ่าน:"
	, "ให้มีผู้เยี่ยมชมได้โดยใช้ชื่อ:"
	, "การเชื่อมต่อ"
	, "เลือกพอร์ตที่ใช้งาน (ค่าพื้นฐานคือพอร์ต bittorrent):"
	, "ให้ใช้เฉพาะจาก IP ดังต่อไปนี้ (คั่นค่าต่างๆด้วย,):"
	, "Enable µTorrent Remote Access"
	, "Authentication"
	, "Username:"
	, "Password:"
	, "ปรับแต่งระดับสูง [ระวัง:อย่าแก้ไข!]"
	, "ค่า:"
	, "จริง"
	, "เท็จ"
	, "ตั้งค่า"
	, "ป๊อบอัพรายการความเร็ว[คั่นค่าต่างๆด้วยเครื่องหมายจุลภาค]"
	, "ใช้ป๊อบอัพรายการความเร็วต่อไปนี้"
	, "รายการความเร็วส่งข้อมูล:"
	, "รายการความเร็วรับข้อมูล:"
	, "ป้ายตลอดกาล [แยกโดยใช้อักขระ |]"
	, "เครื่องมือค้นหา  [รูปแบบ: ชื่อ|URL]"
	, "การตั้งค่าแคชพื้นฐาน"
	, "แคชดิสก์ถูกนำไปใช้สำหรับข้อมูลที่เข้าถึงบ่อยครั้งเพื่อลดจำนวนการอ่านและเขียนไปยังฮาร์ดไดรฟ์ µTorrent จัดการแคชได้เองโดยอัตโนมัติในกรณีปกติ แต่คุณสามารถเปลี่ยนความประพฤติโดยการแก้ไขการตั้งค่าต่อไปนี้ได้"
	, "กำหนดขนาดแคชอัตโนมัติและรุบขนาดแคชเอง(MB):"
	, "ลดการใช้หน่วยความจำเมื่อแคชไม่จำเป็น"
	, "ปรับแต่งแคชขั้นสูง"
	, "ใช้งานดิสก์แคชตอนเขียน"
	, "เขียน block ที่ไม่ถูกแตะต้อง ทุก 2 นาที"
	, "เขียนชิ้นส่วนที่ครบในทันที"
	, "ใช้งานดิสก์แคชตอนอ่าน"
	, "ปิดแคชอ่านถ้าความเร็วการส่งข้อมูลต่ำ"
	, "ลบ block เก่าออกจากแคช"
	, "เพิ่มขนาดแคชอัตโนมัตเมื่อแคชถูกใช้งานหนัก"
	, "ปิดการใช้งานการแคช Windows ของการเขียนดิสก์"
	, "ปิดการใช้งานการแคช Windows ของการอานดิสก์"
	, "เรียกใช้โปรแกรม"
	, "เรียกใช้โปรแกรมนี้เมื่อแฟ้มส่งต่อเสร็จสิ้น:"
	, "เรียกใช้โปรแกรมนี้เมื่อแฟ้มส่งต่อเปลี่ยนสถานะ:"
	, "You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128"
	, "คุณสมบัติ torrent"
	, "ผู้ส่งต่อ (คั่นด้วยบรรทัดว่าง 1 บรรทัด)"
	, "ปรับแต่งแบนด์วิธ"
	, "ส่งข้อมูลสูงสุด (kB/s): [0: ใช้ค่าพื้นฐาน]"
	, "รับข้อมูลสูงสุด (kB/s): [0: ใช้ค่าพื้นฐาน]"
	, "จำนวนช่องของการส่งข้อมูล : [0: ใช้ค่าพื้นฐาน]"
	, "ส่งต่อขณะที่"
	, "ใช้แทนค่าพื้นฐาน"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "ปรับแต่งอื่นๆ"
	, "Initial Seeding"
	, "ใช้งาน DHT"
	, "แลกเปลี่ยนเพียร์กันเอง"
	, "Feed"
	, "Feed URL:"
	, "ปรับแต่งความละเอียด:"
	, "ลงทะเบียน"
	, "อย่าดาวน์โหลดรายการทั้งหมดโดยอัตโนมัติ"
	, "ดาวน์โหลดรายการทั้งหมดที่ประกาศในพาดหัวโดยอัตโนมัติ"
	, "ใช้ตัวกรองระบบกรองเลขตอนอัจฉริยะ"
	, "Feeds||รายการโปรด||ประวัติ||"
	, "All Feeds"
	, "ตั้งค่ากรองข้อมูล"
	, "ชื่อ:"
	, "กรองข้อมูล:"
	, "ไม่ใช่:"
	, "บันทึกใน:"
	, "Quality:"
	, "คุณภาพ:"
	, "หมายเลขตอน: [ตย. 1x12-14]"
	, "กรองข้อมูลโดยชื่อดั้งเดิมแทนชื่อที่ถอดรหัสแล้ว"
	, "ไม่เริ่มรับแฟ้มโดยอัตโนมัติ"
	, "ระบบกรองเลขตอนอัจฉริยะ"
	, "ให้สิทธิ์สูงสุดในการรับข้อมูล"
	, "ช่วงเวลาน้อยที่สุด:"
	, "ป้ายชื่อสำหรับแฟ้มแฟ้มส่งต่อใหม่:"
	, "เพิ่มพาดหัว RSS..."
	, "แก้ไขพาดหัว..."
	, "ปิดการใช้พาดหัว"
	, "เปิดกาใช้พาดหัว"
	, "ปรับปรุงพาดหัว"
	, "ลบพาดหัว"
	, "ดาวน์โหลด"
	, "เปิด URL ในเบราว์เซอร์"
	, "เพิ่มไปยังรายการโปรด"
	, "เพิ่ม"
	, "ลบ"
	, "ทั้งหมด"
	, "(ทั้งหมด)"
	, "(เทียบเสมอ)||(เทียบครั้งแรกเท่านั้น)||12 ชั่วโมง||1 วัน||2 วัน||3 วัน||4 วัน||1 สัปดาห์||2 สัปดาห์||3 สัปดาห์||1 เดือน||"
	, "เพิ่มพาดหัว RSS"
	, "แก้ไขพาดหัว RSS"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "ต้องการลบ RSS Feed \"%s\" หรือไม่ ?"
	, "ชื่อเต็ม"
	, "ชื่อ"
	, "ตอน"
	, "รูปแบบ"
	, "ตัวเข้ารหัส"
	, "Date"
	, "Feed"
	, "URL แหล่ง"
	, "ไอพี"
	, "พอร์ต"
	, "ลูกข่าย"
	, "รหัส"
	, "%"
	, "ที่เกี่ยวข้อง"
	, "รับเร็ว"
	, "ส่งเร็ว"
	, "Reqs"
	, "รอ"
	, "ส่งแล้ว"
	, "รับแล้ว"
	, "Hasherr"
	, "เพียร์รับ"
	, "ส่งสูงสุด"
	, "รับสูงสุด"
	, "รอคิว"
	, "ไม่ติดต่อ"
	, "มีแล้ว"
	, "ชิ้นแรก"
	, "ชื่อ"
	, "# ชิ้น"
	, "Pieces"
	, "ความสำคัญ"
	, "ขนาด"
	, "ละเว้น"
	, "ต่ำ"
	, "ปกติ"
	, "สูง"
	, "รับข้อมูลแล้ว:"
	, "ส่งข้อมูลแล้ว:"
	, "Seeds:"
	, "ที่เหลือ:"
	, "รับข้อมูลเร็ว:"
	, "ส่งข้อมูลเร็ว:"
	, "เพียร์:"
	, "สัดส่วนส่งต่อรับ:"
	, "บันทึกที่:"
	, "Hash:"
	, "ทั่วไป"
	, "การถ่ายโอน"
	, "ติดต่อกับ %d จาก %d (ทั้งหมด %d)"
	, "รับ:%s ส่ง:%s - %s"
	, "คัดลอก"
	, "คืนค่าตั้งต้น"
	, "ไม่จำกัด"
	, "แปลง IP เป็นชื่อ"
	, "Get File(s)"
	, "ไม่ดาวน์โหลด"
	, "สำคัญสูง"
	, "สำคัญต่ำ"
	, "สำคัญปกติ"
	, "คัดลอก URI แม่เหล็ก"
	, "ลบข้อมูล"
	, "ลบ .torrent"
	, "ลบ .torrent + ข้อมูล"
	, "บังคับตรวจข้อมูล"
	, "บังคับเริ่ม"
	, "ป้ายชื่อ"
	, "พัก"
	, "คุณสมบัติ"
	, "ย้ายรายการลง"
	, "ย้ายรายการขึ้น"
	, "ลบ"
	, "ลบและ"
	, "เริ่ม"
	, "หยุด"
	, "ทำงาน"
	, "ทั้งหมด"
	, "เสร็จ"
	, "ยังไม่เสร็จ"
	, "ไม่ทำงาน"
	, "ไม่มีป้ายชื่อ"
	, "||# ชุด||จำนวนชุด"
	, "เพิ่มเมื่อ"
	, "เสร็จสมบูรณ์เมื่อ"
	, "มีแล้ว"
	, "รับแล้ว"
	, "รับเร็ว"
	, "ประมาณ"
	, "ป้ายชื่อ"
	, "ชื่อ"
	, "#"
	, "เพียร์"
	, "ที่เหลือ"
	, "Seeds"
	, "ส่งต่อ/เพียร์"
	, "สัดส่วน"
	, "ขนาด"
	, "URL แหล่ง"
	, "สถานะ"
	, "ส่งแล้ว"
	, "ส่งเร็ว"
	, "คุณแน่ใจหรือไม่ว่าต้องการที่จะเอา %d แฟ้มส่งต่อที่เลือกและข้อมูลที่เกี่ยวข้องออก"
	, "คุณแน่ใจหรือไม่ว่าต้องการที่จะเอาแฟ้มส่งต่อที่เลือกและข้อมูลที่เกี่ยวข้องออก"
	, "คุณแน่ใจหรือไม่ว่าต้องการที่จะเอา %d แฟ้มส่งต่อที่เลือกออก"
	, "คุณแน่ใจหรือไม่ว่าต้องการที่จะเอาแฟ้มส่งต่อที่เลือกออก"
	, "ต้องการลบ RSS Filter \"%s\" จริงหรือ ?"
	, "ตรวจสอบ %:.1d%%"
	, "รับข้อมูล"
	, "ผิดพลาด: %s"
	, "เสร็จสิ้น"
	, "พัก"
	, "รอคิว"
	, "รอคิว seed"
	, "กำลัง seed"
	, "หยุด"
	, "ป้อนชื่อ"
	, "ป้อนชื่อใหม่สำหรับแฟ้มส่งต่อที่เลือก:"
	, "ป้ายชื่อใหม่ ..."
	, "ลบป้ายชื่อ"
	, "ทั่วไป||ผู้ส่งต่อ||เพียร์||ชิ้นส่วน||แฟ้ม||ความเร็ว||ตัวบันทึกเหตุการณ์||"
	, "เพิ่ม Torrent"
	, "เพิ่มแฟ้มส่งต่อจาก URL"
	, "พัก"
	, "การตั้งค่า"
	, "ย้ายรายการลง"
	, "ย้ายรายการขึ้น"
	, "ลบ"
	, "เครื่องมือดาวน์โหลด RSS"
	, "เริ่ม"
	, "หยุด"
	, "แฟ้ม"
	, "เพิ่มแฟ้มส่งต่อ..."
	, "เพิ่มแฟ้มส่งต่อจาก URL..."
	, "ตัวเลือก"
	, "การตั้งค่า"
	, "แสดงหมวด"
	, "แสดงรายละเอียดข้อมูล"
	, "แสดงแถบสถานะ"
	, "แสดงแถบเครื่องมือ"
	, "ไอคอนบนแทป"
	, "วิธีใช้"
	, "เว็บเพจ µTorrent"
	, "ศูนย์รวมกระทู้ µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "ตัวส่งต่อ"
	, "พักงานทั้งหมด"
	, "เริ่มงานต่อทั้งหมด"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "U: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "ขั้นสูง"
	, "ความถี่"
	, "การเชื่อมต่อ"
	, "ดิสก์แคช"
	, "ไดเรกทอรี่"
	, "ทั่วไป"
	, "ตารางเวลา"
	, "การจัดลำดับ"
	, "UI Extras"
	, "การตั้งค่า UI"
	, "BitTorrent"
	, "เว็บ UI"
	, "Transfer Cap"
	, "เรียกใช้โปรแกรม"
	, "Remote"
	, "แสดงรายละเอียด||เริ่ม/หยุด||เปิดโฟลเดอร์||แสดงแถบรับข้อมูล||"
	, "ไม่ใช้||ใช้งาน||บังคับใช้||"
	, "(ไม่มี)||Socks4||Socks5||HTTPS||HTTP||"
	, "อัปโหลด||ดาวน์โหลด||อัปโหลด + ดาวน์โหลด||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "ชื่อ"
	, "ค่า"
	, "จ.||อ.||พ.||พฤ.||ศ.||ส.||อา.||"
	, "จันทร์||อังคาร||พุธ||พฤหัสบดี||ศุกร์||เสาร์||อาทิตย์||"
	, "ความเร็วเต็มที่"
	, "ความเร็วสูงสุด - ใช้การจำกัดความถี่ ทั่วโลกทั่วไป"
	, "จำกัด"
	, "จำกัด - ใช้การจำกัดความถี่ ตามการระบุของตัวจัดการงาน"
	, "ส่งต่อเท่านั้น"
	, "ส่งต่อเท่านั้น - อัปโหลดข้อมูลเท่านั้น (รวมทั้งที่ยังไม่เสร็จสมบูรณ์)"
	, "ปิด"
	, "ปิด - หยุดแฟ้มส่งต่อทั้งหด ที่ไม่ได้มีการบังคับ"
	, "<= %d ชั่วโมง"
	, "(เพิกเฉย)"
	, "<= %d นาที"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];
